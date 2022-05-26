import React from 'react';
import styles from './MyTickets.module.css';
import SwitchButton from '../SwitchButton';
import Ticket from './Ticket';

const MyTickets = ({setPrice, price, randomArray, setToggleIs, toggleIs}) => {
    const displayType = toggleIs === false ? styles.list : styles.grid;
    return(
        <div className={styles.myLottoContainer}>
            <p className={styles.howManyTickets}>구입한 티켓 장수는 <span className={styles.point}>{price/1000}장</span> 입니다.</p>
            <SwitchButton setToggleIs={setToggleIs} toggleIs={toggleIs} randomArray={randomArray} />
            <ul className={`${styles.myLottoTickets} ${displayType} `}>
                {  randomArray.map( random => 
                    <Ticket key={random} toggleIs={toggleIs} random={random}  randomArray={randomArray} />
                )}
            </ul>
        </div>
    )
}

export default MyTickets;