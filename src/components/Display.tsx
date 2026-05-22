import styles from '../styles/Display.module.css'

interface Props {
    value: string
}

const Display = ({ value }: Props) => (
    <div className={styles.display}>
        <span className={styles.value}>{value}</span>
    </div>
)

export default Display