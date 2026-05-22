import Button from './Button'
import styles from '../styles/ButtonGrid.module.css'
import { getHandler, BUTTONS } from '../hooks/buttonConfig'

type Props = {
    onNumber: (n: string) => void; onOperation: (op: '+' | '-' | '*') => void
    onEquals: () => void; onClear: () => void
    onToggleSign: () => void; onDecimal: () => void
}

const ButtonGrid = (props: Props) => (
    <div className={styles.grid}>
        {BUTTONS.flat().map(({ l, v }) => (
            <Button key={l} label={l} onClick={getHandler(l, props)} variant={v as never} />
        ))}
    </div>
)

export default ButtonGrid