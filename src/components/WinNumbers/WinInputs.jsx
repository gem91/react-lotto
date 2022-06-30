import React, { useRef } from "react";

const WinInput = ({setWinNumber, setWinNumbers, winNumbers}) => {
   let inputRef = useRef(0);

   // focus에서 나갈때 입력한 값 업데이트
   const onblur = (e) => {
      inputRef = e.target.value;
   }

   const maxLengthCheck = (e) => {
      if (e.target.value.length > e.target.maxLength) {
         e.target.value = e.target.value.slice(0, e.target.maxLength);
      } else {
         if (e.target.value > 46) {
            alert("45이하 숫자만 입력해주세요.");
            e.target.value = "";
         } else if (e.target.value === "0") {
            alert("숫자 0은 입력 할 수 없습니다.");
            e.target.value = "";
         }
      }
   };

   return (
      <>
         { Object.keys(winNumbers).map( key => 
             <input key={key} ref={inputRef} onInput={maxLengthCheck} onBlur={onblur} maxLength="2" type="number" />
         )}
      </>
   );
};

export default WinInput;
