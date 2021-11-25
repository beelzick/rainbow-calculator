import styles from './Navbar.module.css'
import NavRight from '../NavRight/NavRight'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>
                Rainbow Calculator
            </h1>
            <NavRight />
        </div>
    )
}

export default Navbar