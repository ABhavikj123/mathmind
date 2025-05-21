// Define operation types
type OperationType = "+" | "-" | "*" | "/";

// Get digit count based on level
const getDigitCount = (level: number): number => {
  if (level <= 20) return 1;
  if (level <= 40) return 2;
  if (level <= 60) return 3;
  if (level <= 80) return 4;
  return 5;
};

// Get operand count based on level
const getOperandCount = (level: number): number => {
  const levelWithinBlock = ((level - 1) % 20) + 1;
  // Starts with 2 operands, increases by 1 every 2 levels, max 11
  return Math.min(11, Math.floor((levelWithinBlock + 1) / 2) + 1);
};

// Get allowed operation types based on level section
const getAllowedOperationTypes = (level: number): OperationType[] => {
  const levelWithinBlock = ((level - 1) % 20) + 1;
  const section = Math.ceil(levelWithinBlock / 5);

  const allOperations: OperationType[] = ["+", "-", "*", "/"];
  // Section 1: 1 operation type
  // Section 2: 2 operation types
  // Section 3: 3 operation types
  // Section 4: all 4 operation types
  return allOperations.slice(0, section);
};

// Generate a random number with specified digit count
const generateRandomNumber = (digitCount: number): number => {
  const min = digitCount === 1 ? 1 : Math.pow(10, digitCount - 1);
  const max = Math.pow(10, digitCount) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Choose operation types for the problem based on section
const chooseOperationTypesForProblem = (level: number): OperationType[] => {
  const levelWithinBlock = ((level - 1) % 20) + 1;
  const section = Math.ceil(levelWithinBlock / 5);

  const allOperations: OperationType[] = ["+", "-", "*", "/"];

  // For section 1, choose one operation type for the entire problem
  if (section === 1) {
    const randomIndex = Math.floor(Math.random() * 4);
    return [allOperations[randomIndex]];
  }

  // For sections 2-4, choose the specified number of operation types
  const shuffled = [...allOperations].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, section);
};

// Generate a problem based on the level
export const generateProblem = (level: number) => {
  const digitCount = getDigitCount(level);
  const operandCount = getOperandCount(level);

  // Choose operation types for this problem based on section
  const operationTypesForProblem = chooseOperationTypesForProblem(level);

  // Shuffle the operation types to randomize their order
  const shuffledTypes = [...operationTypesForProblem].sort(() => Math.random() - 0.5);

  // Generate first operand
  const operands: number[] = [generateRandomNumber(digitCount)];
  const operators: OperationType[] = [];
  const steps: string[] = [];
  const elements: (number | string)[] = [operands[0]];

  let currentResult = operands[0];

  // Generate remaining operands and operations
  for (let i = 1; i < operandCount; i++) {
    // Initialize with defaults to satisfy TypeScript
    let operation: OperationType = "+"; // Default to addition
    let nextOperand: number = 1; // Default to 1
    let validOperation = false;
    let attempts = 0;

    // Try to find a valid operation and operand
    while (!validOperation && attempts < 10) {
      attempts++;

      // Cycle through shuffled operation types
      operation = shuffledTypes[(i - 1) % shuffledTypes.length];

      // Special handling for division since it’s critical
      if (operation === "/") {
        // Find a divisor that divides currentResult evenly and is within digit range
        const min = digitCount === 1 ? 1 : Math.pow(10, digitCount - 1);
        const max = Math.pow(10, digitCount) - 1;
        const possibleDivisors = [];
        for (let d = min; d <= max; d++) {
          if (currentResult % d === 0 && d !== 0) {
            possibleDivisors.push(d);
          }
        }
        if (possibleDivisors.length > 0) {
          nextOperand = possibleDivisors[Math.floor(Math.random() * possibleDivisors.length)];
          validOperation = true;
        }
        continue;
      }

      // For non-division operations, generate a random operand
      nextOperand = generateRandomNumber(digitCount);
      validOperation = true;
    }

    // If no valid operation found (e.g., division failed), fallback to another operation
    if (!validOperation) {
      const otherOperations = operationTypesForProblem.filter(op => op !== "/");
      operation = otherOperations.length > 0
        ? otherOperations[Math.floor(Math.random() * otherOperations.length)]
        : "+"; // Fallback to addition if no alternatives
      nextOperand = generateRandomNumber(digitCount);
    }

    // Add the operation and operand
    operators.push(operation);
    operands.push(nextOperand);

    // Add to elements array for sequential display
    elements.push(operation);
    elements.push(nextOperand);

    // Calculate the new result
    const prevResult = currentResult;
    switch (operation) {
      case "+":
        currentResult += nextOperand;
        break;
      case "-":
        currentResult -= nextOperand;
        break;
      case "*":
        currentResult *= nextOperand;
        break;
      case "/":
        currentResult /= nextOperand;
        break;
    }

    // Add calculation step
    steps.push(`${i === 1 ? prevResult : `(${prevResult})`} ${operation} ${nextOperand} = ${currentResult}`);
  }

  return {
    elements,
    answer: currentResult,
    steps,
  };
};