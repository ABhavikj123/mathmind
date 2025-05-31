
type OperationType = "+" | "-" | "*" | "/";

const getDigitCount = (level: number): number => {
  if (level <= 20) return 1;
  if (level <= 40) return 2;
  if (level <= 60) return 3;
  if (level <= 80) return 4;
  return 5;
};

const getOperandCount = (level: number): number => {
  const levelWithinBlock = ((level - 1) % 20) + 1;
  return Math.min(11, Math.floor((levelWithinBlock + 1) / 2) + 1);
};

const getAllowedOperationTypes = (level: number): OperationType[] => {
  const levelWithinBlock = ((level - 1) % 20) + 1;
  const section = Math.ceil(levelWithinBlock / 5);

  const allOperations: OperationType[] = ["+", "-", "*", "/"];
  return allOperations.slice(0, section);
};

const generateRandomNumber = (digitCount: number): number => {
  const min = digitCount === 1 ? 1 : Math.pow(10, digitCount - 1);
  const max = Math.pow(10, digitCount) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const chooseOperationTypesForProblem = (level: number): OperationType[] => {
  const levelWithinBlock = ((level - 1) % 20) + 1;
  const section = Math.ceil(levelWithinBlock / 5);

  const allOperations: OperationType[] = ["+", "-", "*", "/"];

  if (section === 1) {
    const randomIndex = Math.floor(Math.random() * 4);
    return [allOperations[randomIndex]];
  }

  const shuffled = [...allOperations].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, section);
};

export const generateProblem = (level: number) => {
  const digitCount = getDigitCount(level);
  const operandCount = getOperandCount(level);

  const operationTypesForProblem = chooseOperationTypesForProblem(level);

  const shuffledTypes = [...operationTypesForProblem].sort(() => Math.random() - 0.5);

  const operands: number[] = [generateRandomNumber(digitCount)];
  const operators: OperationType[] = [];
  const steps: string[] = [];
  const elements: (number | string)[] = [operands[0]];

  let currentResult = operands[0];

  for (let i = 1; i < operandCount; i++) {
    let operation: OperationType = "+"; 
    let nextOperand: number = 1;
    let validOperation = false;
    let attempts = 0;

    while (!validOperation && attempts < 10) {
      attempts++;

      operation = shuffledTypes[(i - 1) % shuffledTypes.length];

      if (operation === "/") {
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

      nextOperand = generateRandomNumber(digitCount);
      validOperation = true;
    }

    if (!validOperation) {
      const otherOperations = operationTypesForProblem.filter(op => op !== "/");
      operation = otherOperations.length > 0
        ? otherOperations[Math.floor(Math.random() * otherOperations.length)]
        : "+"; 
      nextOperand = generateRandomNumber(digitCount);
    }

    operators.push(operation);
    operands.push(nextOperand);

    elements.push(operation);
    elements.push(nextOperand);

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

    steps.push(`${i === 1 ? prevResult : `(${prevResult})`} ${operation} ${nextOperand} = ${currentResult}`);
  }

  return {
    elements,
    answer: currentResult,
    steps,
  };
};