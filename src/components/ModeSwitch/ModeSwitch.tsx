import { ChangeEvent, useContext, useState } from 'react'
import { DarkContext } from '../../App'
import styles from './ModeSwitch.module.css'

const ModeSwitch = () => {
    const { isDark, setIsDark } = useContext(DarkContext)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target
        setIsDark(checked)
        setTimeout(() => {
            document.documentElement.style.setProperty('--mode-color', checked ? '#212529' : '#fff');
        }, 200)
    }

    return (
        <div>
            <input
                type='checkbox'
                className={styles.checkbox}
                id='checkbox'
                checked={isDark}
                onChange={handleChange}
            />
            <label htmlFor='checkbox' className={styles.label}>
                <i className='fa fa-moon' />
                <i className='fa fa-sun' />
                <div className={styles.ball} />
            </label>
        </div>
    )
}

export default ModeSwitch