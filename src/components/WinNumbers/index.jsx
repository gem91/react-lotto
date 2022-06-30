import React, { useRef } from "react";
import BasicButton from "../Button/BasicButton";
import styles from "./WinNumbers.module.css";

const WinNumbers = ({ setWinNumbers, winNumbers, onPopup }) => {
 
   //* s: input 관련 JS //////////
   let inputRef = useRef(null);

   // focus에서 나갈때 입력한 값 업데이트
   const onChange = (e) => {
      const { name, value } = e.target;
      setWinNumbers({...winNumbers,
         [name] : value,
      })
   }

   const maxLengthCheck = (e) => {
      if (e.target.value.length > e.target.maxLength) {
         e.target.value = e.target.value.slice(0, e.target.maxLength);  // 2자리 이상 안나오게
      } else { // 당첨번호 범위 설정하기
         if (e.target.value > 46) {
            alert("45이하 숫자만 입력해주세요.");
            e.target.value = "";
         } else if (e.target.value === "0") {
            alert("숫자 0은 입력 할 수 없습니다.");
            e.target.value = "";
         }
      }
   };
   // e: input 관련 JS

   
   return (
      <div className={styles.winContainer}>
         <p className={styles.winNotice}>
            지난 주 당첨번호 <span className={styles.point}>6자리</span>와
            보너스 넘버 <span className={styles.point}>1개</span>를
            입력해주세요.
         </p>
         <div className={styles.winNumbers}>
            <div className={styles.winInputArea}>
               <div className={styles.title}>
                  <span>당첨 번호</span>
                  <span>보너스</span>
               </div>
               <div id="winInputs" className={styles.winInputs} >
                  { 
                  Object.entries(winNumbers).map(([key, value]) => (
                     <input key={key} name={[key]} value={value || ''} ref={inputRef} onInput={maxLengthCheck} onChange={onChange} maxLength="2" type="number" />
                  ))
                  }
               </div>
            </div>
         </div>
         <BasicButton onPopup={onPopup} title={"도비 탈출하기"} />
      </div>
   );
};

export default WinNumbers;
