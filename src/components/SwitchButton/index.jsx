import React from 'react';
import styles from './SwitchButton.module.css';

const SwitchButton = ({setToggleIs, toggleIs}) => {
    const onToggle = () => {
        const toggle = document.querySelector(".lotto-toggle-btn");
        toggle.classList.toggle('active')
        !toggle.classList.contains('active') ? setToggleIs(false) : setToggleIs(true)
    }

    return(
        <div className={styles.toggleBox}>
            <label className={styles.switch} >
                <input className='lotto-toggle-btn' type="checkbox" onClick={onToggle} />
                <span >번호보기</span>
            </label>
        </div>
    )
}

export default SwitchButton;