import styles from '../styles/Button.module.css'

type ButtonVariant = 'number' | 'operation' | 'action' | 'equals' | 'wide'

interface Props {
    label: string
    onClick: () => void
    variant?: ButtonVariant
}

const Button = ({ label, onClick, variant = 'number' }: Props) => (
    <button
        className={`${styles.button} ${styles[variant]}`}
        onClick={onClick}
    >
        {label}
    </button>
)

export default Button