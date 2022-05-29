import { useState, useEffect } from "react";
import "./app.css";
import LottoInfo from "./components/LottoInfo";
import TicketBox from "./components/BuyTickets";
import Modal from "./components/Modal";

function App() {
   const [price, setPrice] = useState(null);
   const [randomArray, setRandomArray] = useState([]);
   const [winner, setWinner] = useState([0]);
   const [popupIs, setPopupIs] = useState(false);

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
         console.log(lottoTicektNumbgers);
      }
      setRandomArray(lottoTicektNumbgers);
   }, [price]);

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
                  setWinner={setWinner}
                  winner={winner}
               />
            )}

            {popupIs && <Modal setPopupIs={setPopupIs} />}
         </div>
      </main>
   );
}

export default App;
