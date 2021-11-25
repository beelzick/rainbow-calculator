import { useContext } from 'react'
import { ThemeContext } from '../../App'
import styles from './ThemePicker.module.css'

interface Props {
    background: string
}

const ButtonPicker = ({ background }: Props) => {
    const { setTheme } = useContext(ThemeContext)
    const handleClick = () => {
        setTheme(background)
    }
    return (
        <button className={styles.button} style={{ background }} onClick={handleClick} />
    )
}

export default ButtonPicker