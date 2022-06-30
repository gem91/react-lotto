import React, { useState } from "react";
import BasicButton from "../Button/BasicButton";
import styles from "./modal.module.css";

const Modal = ({ setPopupIs, randomArray, winNumbers, howManySameNumbers }) => {
   const [ count, setCount ] = useState(0);

   const init = {
      1 : {
         일치갯수 : '3개',
         당첨금 : 5000,
         당첨갯수 : count,
      },
      2: {
         일치갯수 : '4개',
         당첨금 : 50000,
         당첨갯수 : count,
      },
      3 : {
         일치갯수 : '5개',
         당첨금 : 1500000,
         당첨갯수 : count,
      },
      4 : {
         일치갯수 : '5개 + 보너스 볼',
         당첨금 : 30000000,
         당첨갯수 : count,
      },
      5: {
         일치갯수 : '5개',
         당첨금 : 2000000000,
         당첨갯수 : count,
      },
   }

  

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
               <tbody>
                  {
                     Object.entries(init).map(([key, value]) => (
                        <tr key={key}>
                           <td>{value.일치갯수}</td>
                           <td>{value.당첨금.toLocaleString()}</td>
                           <td>{value.당첨갯수}개</td>
                        </tr>
                     ))
                  }
               </tbody>
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
