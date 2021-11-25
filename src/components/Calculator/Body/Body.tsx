import { ReactNode } from 'react'
import styles from './Body.module.css'

interface Props {
    children: ReactNode
}

const Body = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Body