import React, { useState } from "react";
import styles from "./modal.module.css";

const initMapper = {
   3: {
      개수: 3,
      text: "3개다",
      당첨금: 5000,
   },
   4: {
      개수: 4,
      text: "4개다",
      당첨금: 50000,
   },
   5: {
      개수: 5,
      text: "5개다",
      당첨금: 1500000,
   },
   6: {
      개수: 6,
      text: "6개다",
      당첨금: 30000000,
   },
   7: {
      개수: 7,
      text: "7개다",
      당첨금: 2000000000,
   },
};

const Modal = ({
   setPopupIs,
   randomArray,
   winNumbers,
   같은숫자개수,
   set같은숫자개수,
}) => {
   const newMap = 같은숫자개수.reduce((prev, cur) => {
      if (!prev.has(cur)) {
         prev.set(cur, 1);
      } else {
         prev.set(cur, prev.get(cur) + 1);
      }
      return prev;
   }, new Map());

   const aaa = Object.keys(initMapper).map((v) => initMapper[v]);
   const test = aaa.map((el) => ({
      ...el,
      count: newMap.get(el.개수) || 0,
   }));
   console.log(test);

   const onReset = () => {
      setPopupIs(false);
      set같은숫자개수([]);
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
                  {test.map((el, idx) => (
                     <tr key={idx}>
                        <td>{el.개수}</td>
                        <td>{el.당첨금.toLocaleString()}</td>
                        <td>{el.count}개</td>
                     </tr>
                  ))}
               </tbody>
               <tfoot>
                  <tr>
                     <td colSpan="3">당신의 총 수익률은 -100% 입니다.</td>
                  </tr>
               </tfoot>
            </table>
            <button className={styles.defalutButton} onClick={onReset}>
               다시 시작하기
            </button>
            <button
               className={styles.closeButton}
               type="button"
               onClick={onReset}
            >
               close
            </button>
         </div>
         <div className={styles.dimBG}></div>
      </>
   );
};

export default Modal;
