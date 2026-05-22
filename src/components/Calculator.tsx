import { useCalculator } from '../hooks/useCalculator'
import Display from './Display'
import ButtonGrid from './ButtonGrid'
import styles from '../styles/Calculator.module.css'

const Calculator = () => {
    const { display, handleNumber, handleOperation, handleEquals, handleClear, handleToggleSign, handleDecimal } =
        useCalculator()

    return (
        <div className={styles.calculator}>
            <Display value={display} />
            <ButtonGrid onNumber={handleNumber} onOperation={handleOperation}
                onEquals={handleEquals} onClear={handleClear}
                onToggleSign={handleToggleSign} onDecimal={handleDecimal} />
        </div>
    )
}

export default Calculator