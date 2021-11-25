import styles from './ThemePicker.module.css'
import { useContext, useEffect } from 'react'
import { ThemeDialogContext } from '../NavRight/NavRight'
import ButtonPicker from './ButtonPicker'
import pickerBackgrounds from '../../helpers/pickerButtons'
import { ThemeContext } from '../../App'
import ClickAwayListener from 'react-click-away-listener';

const ThemePicker = () => {
    const { isOpen, setIsOpen } = useContext(ThemeDialogContext)
    const { theme } = useContext(ThemeContext)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const handleClickAway = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--theme-color', theme);
    }, [theme])

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={handleClick} style={{ background: theme }} />
            {isOpen && (
                <ClickAwayListener onClickAway={handleClickAway}>
                    <div className={styles.dialog}>
                        {pickerBackgrounds.map(background => (
                            <ButtonPicker background={background} />
                        ))}
                    </div>
                </ClickAwayListener>
            )}
        </div>
    )
}

export default ThemePicker