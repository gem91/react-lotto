import React from 'react';
import styles from './MyTickets.module.css';

const Ticket = ({toggleIs, random}) => {
    return(
        <>
            <li>
                <span className={styles.lottoIcon}>🎟️</span>
                { toggleIs &&
                    <p className={styles.myNumber}>
                        { random.map( (lotto, idx) => <span key={idx} className={styles.num}>{lotto}</span>)}
                    </p>
                }
            </li>
        </>
    )
} 

export default Ticket;