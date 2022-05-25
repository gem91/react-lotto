import styles from './WinNumbers.module.css';

const WinNumbers = () => {
    const maxLengthCheck =(e) =>{
        console.log(e.target.maxLength);
        if(e.target.value.length > e.target.maxLength){
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }else{
            if(e.target.value > 50){
                alert('45이하 숫자만 입력해주세요.');
                e.target.value = '';
            }else if(e.target.value === '0'){
                alert('숫자 0은 입력 할 수 없습니다.');
                e.target.value = '';
            }
        }
    }

    return(
        <div className={styles.winContainer}>
        <p className={styles.winNotice}>지난 주 당첨번호 <span className={styles.point}>6자리</span>와 보너스 넘버 <span className={styles.point}>1개</span>를 입력해주세요.</p>
        <div className={styles.winNumbers}>
          <div className={styles.winInputArea}>
              <p className={styles.winTitle}>당첨 번호</p>
              <div className={styles.winInputs}>
                  <input maxLength="2" type="number" onInput={maxLengthCheck} />
                  <input maxLength="2" type="number" onInput={maxLengthCheck} />
                  <input maxLength="2" type="number" onInput={maxLengthCheck} />
                  <input maxLength="2" type="number" onInput={maxLengthCheck} />
                  <input maxLength="2" type="number" onInput={maxLengthCheck} />
                  <input maxLength="2" type="number" onInput={maxLengthCheck} />
              </div>
          </div>
          <div className={styles.bonusArea}>
              <p className={styles.winTitle}>보너스</p>
              <div className={styles.bonusInput}>
                  <input maxLength="2" type="number" onInput={maxLengthCheck} />
              </div>
          </div>
        </div>
       
       <button className={styles.escapeDobby} type='button'>도비 탈출하기</button>
        </div>
    )
}

export default WinNumbers;