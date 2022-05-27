import React from 'react';
import styles from './modal.module.css';

const Modal = ({setPopupIs}) => {
    
    const onClose = () => {
        setPopupIs(false)
    }
    return(
        <>
        <div className={styles.popup}>
            <p>test</p>
            <button className={styles.closeButton} type='button' onClick={onClose}>close</button>
        </div>
        <div className={styles.dimBG}></div>
        </>
        
    )
}

export default Modal;