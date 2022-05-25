import React,  { useRef } from 'react';
import styles from './BuyTickets.module.css';

const BuyTickets = ({setPrice}) => {
    const priceRef = useRef();


    const handleSubmit = () => {
        let priceValue = priceRef.current.value;
        if( priceValue < 999){
            alert('1000원 이상 구입해주세요.')
        } else{
            if( priceValue % 1000 === 0 ){
                setPrice( priceValue );
                priceRef.current.value = '';
            }else{
                alert('로또 구입 금액을 1,000원 단위로 입력해 주세요.');
            }
        }
    }
    const onBuying = () => {
        handleSubmit()
        priceRef.current.focus();
    }
    const onKeyPress = (e) => {
        if( e.key === "Enter" ) handleSubmit();
    }
    return (
        <div className={styles.inputContainer}>
            <input className={styles.input} ref={priceRef} type="number" placeholder='구입 가격' onKeyPress={onKeyPress} />
            <button className={styles.buttonSubmit} type='button' onClick={onBuying}>확인</button>
        </div>
    )
};

export default BuyTickets;