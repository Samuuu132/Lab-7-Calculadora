import { useState } from 'react'

const MAX_DIGITS = 9
const MAX_VALUE = 999999999

export type Operation = '+' | '-' | '*' | '/' | '%' | null

const checkError = (value: number): boolean => value < 0 || value > MAX_VALUE

const calculate = (a: number, b: number, op: Operation): number => {
    if (op === '+') return a + b
    if (op === '-') return a - b
    if (op === '*') return a * b
    if (op === '/') return a / b
    if (op === '%') return a % b
    return b
}

const toDisplay = (result: number): string => {
    const str = String(result)
    const digits = str.replace('.', '').replace('-', '')
    return digits.length > MAX_DIGITS ? 'ERROR' : str
}

export const useCalculator = () => {
    const [display, setDisplay] = useState('0')
    const [firstOperand, setFirstOperand] = useState<number | null>(null)
    const [operation, setOperation] = useState<Operation>(null)
    const [waitingForSecond, setWaitingForSecond] = useState(false)

    const handleNumber = (num: string) => {
        if (display === 'ERROR') return
        if (waitingForSecond) { setDisplay(num); setWaitingForSecond(false); return }
        if (display.replace('.', '').replace('-', '').length >= MAX_DIGITS) return
        setDisplay(display === '0' ? num : display + num)
    }

    const handleDecimal = () => {
        if (display === 'ERROR') return
        if (waitingForSecond) { setDisplay('0.'); setWaitingForSecond(false); return }
        if (!display.includes('.')) setDisplay(display + '.')
    }

    const handleOperation = (op: Operation) => {
        if (display === 'ERROR') return
        const current = parseFloat(display)
        if (firstOperand !== null && !waitingForSecond) {
            const result = calculate(firstOperand, current, operation)
            if (checkError(result)) { setDisplay('ERROR'); return }
            setDisplay(toDisplay(result))
            setFirstOperand(result)
        } else {
            setFirstOperand(current)
        }
        setOperation(op)
        setWaitingForSecond(true)
    }

    const handleEquals = () => {
        if (display === 'ERROR' || firstOperand === null) return
        const result = calculate(firstOperand, parseFloat(display), operation)
        if (checkError(result)) { setDisplay('ERROR'); return }
        setDisplay(toDisplay(result))
        setFirstOperand(null)
        setOperation(null)
        setWaitingForSecond(false)
    }

    const handleClear = () => {
        setDisplay('0')
        setFirstOperand(null)
        setOperation(null)
        setWaitingForSecond(false)
    }

    const handleToggleSign = () => {
        if (display === 'ERROR' || display === '0') return
        const value = parseFloat(display) * -1
        const str = String(value)
        const digits = str.replace('.', '').replace('-', '')
        setDisplay(digits.length > MAX_DIGITS ? 'ERROR' : str)
    }

    return {
        display, handleNumber, handleDecimal,
        handleOperation, handleEquals, handleClear, handleToggleSign
    }
}