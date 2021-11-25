import { AppContext } from '../../App'
import styles from './ButtonDigit.module.css'
import { useContext } from 'react'
interface Props {
    digit: string
}

const ButtonDigit = ({ digit }: Props) => {
    const { dispatch } = useContext(AppContext)

    const handleClick = () => {
        dispatch({ type: 'ADD_DIGIT', payload: { digit } })
    }

    return (
        <button
            onClick={handleClick}
            className={styles.button}
        >
            {digit}
        </button>
    )
}

export default ButtonDigit