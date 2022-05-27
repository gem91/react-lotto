import React from 'react';
import WinInput from './WinInput';
import styles from './WinNumbers.module.css';

const WinNumbers = ({setWinner, winner, setPopupIs}) => {


    const onPopup = (data) => {
        setPopupIs(true)
        setWinner(winner)
        console.log(winner);
    }

    return(
        <div className={styles.winContainer}>
        <p className={styles.winNotice}>지난 주 당첨번호 <span className={styles.point}>6자리</span>와 보너스 넘버 <span className={styles.point}>1개</span>를 입력해주세요.</p>
        <div className={styles.winNumbers}>
        <div className={styles.winInputArea}>
            <p className={styles.winTitle}>당첨 번호</p>
            <div className={styles.winInputs}>
                <WinInput setWinner={setWinner} onPopup={onPopup} />
                <WinInput setWinner={setWinner} onPopup={onPopup} />
                <WinInput setWinner={setWinner} onPopup={onPopup} />
                <WinInput setWinner={setWinner} onPopup={onPopup} />
                <WinInput setWinner={setWinner} onPopup={onPopup} />
                <WinInput setWinner={setWinner} onPopup={onPopup} />
            </div>
        </div>
        <div className={styles.bonusArea}>
            <p className={styles.winTitle}>보너스</p>
            <div className={styles.bonusInput}>
                <WinInput setWinner={setWinner} onPopup={onPopup} />
            </div>
        </div>
        </div>
        <button className={styles.escapeDobby} type='button' onClick={onPopup}>도비 탈출하기</button>
    </div>
    )
}

export default WinNumbers;