import React from "react";
import BasicButton from "../Button/BasicButton";
import List from "./List/List";
import styles from "./modal.module.css";

const Modal = ({ setPopupIs }) => {
   const onClose = () => {
      setPopupIs(false);
   };
   return (
      <>
         <div className={styles.popup}>
            <h2>🏆 당첨 통계 🏆</h2>
            <table className={styles.tableList}>
               <thead>
                  <tr>
                     <th>일치 갯수</th>
                     <th>당첨금</th>
                     <th>당첨 갯수</th>
                  </tr>
               </thead>
               <List />
               <tfoot>
                  <tr>
                     <td colSpan="3">당신의 총 수익률은 -100% 입니다.</td>
                  </tr>
               </tfoot>
            </table>
            <BasicButton title={"다시 시작하기"} />
            <button
               className={styles.closeButton}
               type="button"
               onClick={onClose}
            >
               close
            </button>
         </div>
         <div className={styles.dimBG}></div>
      </>
   );
};

export default Modal;
