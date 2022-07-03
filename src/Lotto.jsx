import { useState, useEffect } from "react";
import "./app.css";
import LottoInfo from "./components/LottoInfo";
import TicketBox from "./components/BuyTickets";
import Modal from "./components/Modal";

function App() {
   // 가격 측정
   const [price, setPrice] = useState(null);
   // 랜덤으로 배열구하기
   const [randomArray, setRandomArray] = useState([]);
   // 당첨번호 숫자객체
   const [winNumbers, setWinNumbers] = useState({
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      sixth: 0,
      seventh: 0,
   });

   const [같은숫자개수, set같은숫자개수] = useState([]);

   useEffect(() => {}, [같은숫자개수]);
   // console.log("이거 궁금", 같은숫자개수); // 같은 갯수
   // 팝업
   const [popupIs, setPopupIs] = useState(false);

   // 랜덤객체 구하는 EFFECT
   useEffect(() => {
      const 로또넘버갯수 = 7;
      const lottoTicektNumbgers = [];
      function getRandom(min, max) {
         return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      for (let ticket = 0; ticket < price / 1000; ticket++) {
         const newSet = new Set();
         while (newSet.size !== 로또넘버갯수) {
            const random = getRandom(1, 12);
            newSet.add(random);
         }
         lottoTicektNumbgers.push([...newSet]);
      }
      setRandomArray(lottoTicektNumbgers);
   }, [price]);

   const onPopup = () => {
      // 당첨금을 돌려서 7개 숫자 중 0이면 경고창
      for (let value of Object.values(winNumbers)) {
         // console.log(typeof value);
         if (value === 0) {
            alert("이번주의 당첨번호를 입력하세요");
            return; // 값이 0일때 팝업창 안뜨게
         } else {
            //값이 있으면 팝업창 열리게
            setPopupIs(true);
            const test = getWinNums(winNumbers);
            return test;
         }
      }
   };

   //당첨금 비교
   const getWinNums = (wins) => {
      당첨금_같은숫자개수_배열(
         randomArray,
         Object.values(wins).map((win) => Number(win))
      );
   };

   const 당첨금_같은숫자개수_배열 = (random, winValue) => {
      const 당첨숫자배열 = [];
      for (let ticket = 0; ticket < price / 1000; ticket++) {
         let 같은숫자 = random[ticket].filter((el) => {
            return winValue.includes(el);
         });
         let 같은숫자몇개 = 같은숫자.length;
         // 같은갯수 배열로 푸시하기
         당첨숫자배열.push(같은숫자몇개);
      }
      set같은숫자개수(당첨숫자배열);
   };

   // useEffect(() => {
   //    let numberItems = Array.from(Array(price / 1000), () => new Array(7));

   //    for (let ticket = 0; ticket < price / 1000; ticket++) {
   //       for (let i = 0; i < 7; i++) {
   //          let random = Math.floor(Math.random() * 45) + 1;

   //          numberItems[ticket][i] = random;

   //          // 중복 체크여부 falg boolean 변수 하나
   //          let isDuplicated = false;
   //          for (let e = 0; e < i; e++) {
   //             if (numberItems[ticket][e] === random) {
   //                isDuplicated = true;
   //                break;
   //             }
   //          }

   //          if (isDuplicated) {
   //             i -= 1;
   //          }
   //       }
   //       setRandomArray(numberItems);
   //    }
   // }, [price]);

   return (
      <main>
         <h1>인생 한방, 행운의 🎱LOTTO</h1>
         <div className="inner">
            <p className="notice">구입할 금액을 입력해주세요.</p>
            <TicketBox setPrice={setPrice}></TicketBox>
            {true && (
               <LottoInfo
                  setPrice={setPrice}
                  price={price}
                  randomArray={randomArray}
                  setPopupIs={setPopupIs}
                  setWinNumbers={setWinNumbers}
                  winNumbers={winNumbers}
                  onPopup={onPopup}
               />
            )}

            {popupIs && (
               <Modal
                  setPopupIs={setPopupIs}
                  randomArray={randomArray}
                  winNumbers={winNumbers}
                  같은숫자개수={같은숫자개수}
                  set같은숫자개수={set같은숫자개수}
               />
            )}
         </div>
      </main>
   );
}

export default App;
