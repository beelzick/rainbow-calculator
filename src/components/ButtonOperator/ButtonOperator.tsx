import { MouseEventHandler, useContext } from 'react'
import styles from './ButtonOperator.module.css'
import classnames from 'classnames'
import { AppContext } from '../../App'

interface Props {
    variant?: 'double'
    operator: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const ButtonOperator = ({ operator, variant, onClick }: Props) => {
    const { dispatch } = useContext(AppContext)
    const handleClick = () => {
        dispatch({ type: 'OPERATOR', payload: { operator } })
    }

    return (
        <button
            onClick={onClick ? onClick : handleClick}
            className={classnames(styles.button, variant === 'double' && styles.double)}
        >
            {operator}
        </button>
    )
}

export default ButtonOperator