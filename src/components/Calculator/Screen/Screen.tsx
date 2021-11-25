import { useContext } from 'react'
import { AppContext } from '../../../App'
import styles from './Screen.module.css'
import formatNumber from '../../../helpers/formatNumber'

const Screen = () => {
    const { state: { current, previous, operator } } = useContext(AppContext)
    return (
        <div className={styles.container}>
            <div className={styles.previous}>
                {formatNumber(previous)} {operator}
            </div>
            <div className={styles.current}>
                {formatNumber(current)}
            </div>
        </div>
    )
}

export default Screen