import styles from './NavRight.module.css'
import ModeSwitch from '../ModeSwitch/ModeSwitch'
import ThemePicker from '../ThemePicker/ThemePicker'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface ThemeDialogContextType {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const ThemeDialogContext = createContext<ThemeDialogContextType>({
    isOpen: false,
    setIsOpen: () => { }
})

const NavRight = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const value = { isOpen, setIsOpen }
    return (
        <ThemeDialogContext.Provider value={value}>
            <div className={styles.container}>
                <ThemePicker />
                <ModeSwitch />
            </div>
        </ThemeDialogContext.Provider>
    )
}

export default NavRight