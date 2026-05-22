import type { Operation } from './useCalculator'

type ButtonProps = { l: string; v?: string }

type GridProps = {
    onNumber: (n: string) => void
    onOperation: (op: Operation) => void
    onEquals: () => void
    onClear: () => void
    onToggleSign: () => void
    onDecimal: () => void
}

export const BUTTONS: ButtonProps[][] = [
    [{ l: 'AC', v: 'action' }, { l: '+/-', v: 'action' }, { l: '%', v: 'action' }, { l: '÷', v: 'operation' }],
    [{ l: '7' }, { l: '8' }, { l: '9' }, { l: '×', v: 'operation' }],
    [{ l: '4' }, { l: '5' }, { l: '6' }, { l: '-', v: 'operation' }],
    [{ l: '1' }, { l: '2' }, { l: '3' }, { l: '+', v: 'operation' }],
    [{ l: '0' }, { l: '.' }, { l: '=', v: 'equals-wide' }]
]

export const getHandler = (label: string, p: GridProps): (() => void) => {
    const ops: Record<string, () => void> = {
        AC: p.onClear,
        '+/-': p.onToggleSign,
        '.': p.onDecimal,
        '=': p.onEquals,
        '+': () => p.onOperation('+'),
        '-': () => p.onOperation('-'),
        '×': () => p.onOperation('*'),
        '÷': () => p.onOperation('/'),
        '%': () => p.onOperation('%')
    }
    return ops[label] ?? (() => p.onNumber(label))
}