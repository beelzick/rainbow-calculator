import styles from './NavRight.module.css'
import ModeSwitch from '../ModeSwitch/ModeSwitch'

const NavRight = () => {
    return (
        <div className={styles.container}>
            <ModeSwitch />
        </div>
    )
}

export default NavRight