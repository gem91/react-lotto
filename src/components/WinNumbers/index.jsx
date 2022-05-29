import React from "react";
import BasicButton from "../Button/BasicButton";
import WinInput from "./WinInput";
import styles from "./WinNumbers.module.css";

const WinNumbers = ({ setWinner, winner, setPopupIs }) => {
   const onPopup = (data) => {
      setPopupIs(true);
      setWinner(winner);
      console.log(winner);
   };

   return (
      <div className={styles.winContainer}>
         <p className={styles.winNotice}>
            지난 주 당첨번호 <span className={styles.point}>6자리</span>와
            보너스 넘버 <span className={styles.point}>1개</span>를
            입력해주세요.
         </p>
         <div className={styles.winNumbers}>
            <div className={styles.winInputArea}>
               <p className={styles.winTitle}>당첨 번호</p>
               <div className={styles.winInputs}>
                  <WinInput setWinner={setWinner} />
                  <WinInput setWinner={setWinner} />
                  <WinInput setWinner={setWinner} />
                  <WinInput setWinner={setWinner} />
                  <WinInput setWinner={setWinner} />
                  <WinInput setWinner={setWinner} />
               </div>
            </div>
            <div className={styles.bonusArea}>
               <p className={styles.winTitle}>보너스</p>
               <div className={styles.bonusInput}>
                  <WinInput setWinner={setWinner} />
               </div>
            </div>
         </div>
         <BasicButton onPopup={onPopup} title={"도비 탈출하기"} />
      </div>
   );
};

export default WinNumbers;
