import React, { useRef } from 'react';

const WinInput = ({setWinner, onPopup}) => {
    
    const inputRef = useRef(0);
    
    const maxLengthCheck =(e) =>{
        if(e.target.value.length > e.target.maxLength){
            e.target.value = e.target.value.slice(0, e.target.maxLength);
            const data = inputRef.current.value;
            onPopup(data)
       }else{
            if(e.target.value > 46){
                alert('45이하 숫자만 입력해주세요.');
                e.target.value = '';
            }else if(e.target.value === '0'){
                alert('숫자 0은 입력 할 수 없습니다.');
                e.target.value = '';
            }
        }
    }
    return(
        <input ref={inputRef} maxLength="2" type="number" onInput={maxLengthCheck} />
    )
}

export default WinInput;