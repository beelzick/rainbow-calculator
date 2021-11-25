import { ReactNode, useContext } from 'react'
import { ThemeContext } from '../../../App'
import styles from './Body.module.css'

interface Props {
    children: ReactNode
}

const Body = ({ children }: Props) => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={styles.container} style={{ background: theme }}>
            {children}
        </div>
    )
}

export default Body