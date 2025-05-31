'use client'
interface ProblemDisplayProps {
  expression: string
  operands: number[]
  operators: string[]
}
// Expression is remaining for future use, it's not currently used in the component,import it as props in the component
export default function ProblemDisplay({ operands, operators }: ProblemDisplayProps) {
  const formattedExpression = operands.reduce((acc, operand, index) => {
    if (index === 0) return operand.toString()

    if (index === 1) {
      return `(${acc} ${operators[index - 1]} ${operand})`
    }

    return `(${acc}) ${operators[index - 1]} ${operand}`
  }, "")

  return (
    <div className="my-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Solve this problem:</h3>
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <p className="text-2xl font-mono text-center font-bold text-purple-800">{formattedExpression}</p>
      </div>
      <p className="text-xs text-gray-500 mt-1">Remember: Calculate from left to right, following the brackets.</p>
    </div>
  )
}
