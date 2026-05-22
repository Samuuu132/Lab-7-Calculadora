import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCalculator } from '../hooks/useCalculator'

describe('useCalculator', () => {
    it('should start with 0', () => {
        const { result } = renderHook(() => useCalculator())
        expect(result.current.display).toBe('0')
    })

    it('should update display when number is pressed', () => {
        const { result } = renderHook(() => useCalculator())
        act(() => result.current.handleNumber('5'))
        expect(result.current.display).toBe('5')
    })

    it('should concatenate numbers', () => {
        const { result } = renderHook(() => useCalculator())
        act(() => result.current.handleNumber('1'))
        act(() => result.current.handleNumber('2'))
        act(() => result.current.handleNumber('3'))
        expect(result.current.display).toBe('123')
    })

    it('should add two numbers correctly', () => {
        const { result } = renderHook(() => useCalculator())
        act(() => result.current.handleNumber('5'))
        act(() => result.current.handleOperation('+'))
        act(() => result.current.handleNumber('3'))
        act(() => result.current.handleEquals())
        expect(result.current.display).toBe('8')
    })

    it('should subtract and show ERROR when negative', () => {
        const { result } = renderHook(() => useCalculator())
        act(() => result.current.handleNumber('3'))
        act(() => result.current.handleOperation('-'))
        act(() => result.current.handleNumber('5'))
        act(() => result.current.handleEquals())
        expect(result.current.display).toBe('ERROR')
    })

    it('should show ERROR when result exceeds 999999999', () => {
        const { result } = renderHook(() => useCalculator())
        act(() => result.current.handleNumber('9'))
        act(() => result.current.handleNumber('9'))
        act(() => result.current.handleNumber('9'))
        act(() => result.current.handleNumber('9'))
        act(() => result.current.handleNumber('9'))
        act(() => result.current.handleNumber('9'))
        act(() => result.current.handleNumber('9'))
        act(() => result.current.handleNumber('9'))
        act(() => result.current.handleNumber('9'))
        act(() => result.current.handleOperation('+'))
        act(() => result.current.handleNumber('1'))
        act(() => result.current.handleEquals())
        expect(result.current.display).toBe('ERROR')
    })

    it('should clear display when AC is pressed', () => {
        const { result } = renderHook(() => useCalculator())
        act(() => result.current.handleNumber('5'))
        act(() => result.current.handleClear())
        expect(result.current.display).toBe('0')
    })

    it('should not accept more than 9 digits', () => {
        const { result } = renderHook(() => useCalculator())
        act(() => result.current.handleNumber('1'))
        act(() => result.current.handleNumber('2'))
        act(() => result.current.handleNumber('3'))
        act(() => result.current.handleNumber('4'))
        act(() => result.current.handleNumber('5'))
        act(() => result.current.handleNumber('6'))
        act(() => result.current.handleNumber('7'))
        act(() => result.current.handleNumber('8'))
        act(() => result.current.handleNumber('9'))
        act(() => result.current.handleNumber('0'))
        expect(result.current.display).toBe('123456789')
    })

    it('should multiply two numbers correctly', () => {
        const { result } = renderHook(() => useCalculator())
        act(() => result.current.handleNumber('4'))
        act(() => result.current.handleOperation('*'))
        act(() => result.current.handleNumber('3'))
        act(() => result.current.handleEquals())
        expect(result.current.display).toBe('12')
    })

    it('should toggle sign correctly', () => {
        const { result } = renderHook(() => useCalculator())
        act(() => result.current.handleNumber('5'))
        act(() => result.current.handleToggleSign())
        expect(result.current.display).toBe('-5')
    })
})