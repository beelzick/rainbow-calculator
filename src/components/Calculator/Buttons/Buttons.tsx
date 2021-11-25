import styles from './Buttons.module.css'
import ButtonDigit from '../../ButtonDigit/ButtonDigit'
import ButtonOperator from '../../ButtonOperator/ButtonOperator'
import { AppContext } from '../../../App'
import { useContext } from 'react'
import buttonsContent from '../../../helpers/buttonsContent'

const Buttons = () => {
    const { dispatch } = useContext(AppContext)
    return (
        <div className={styles.container}>
            {buttonsContent(dispatch).map(({ buttonType, variant, operator, onClick, digit }) => (
                buttonType === 'operator' ? (
                    <ButtonOperator key={operator!} variant={variant} operator={operator!} onClick={onClick} />
                ) : (
                    <ButtonDigit key={digit!} digit={digit!} />
                )
            ))}
        </div >
    )
}

export default Buttons