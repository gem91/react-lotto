import { useState, useEffect } from 'react';
import './app.css';
import LottoInfo from './components/LottoInfo';
import TicketBox from './components/BuyTickets';
import Modal from './components/Modal';

function App() {

  const [ price, setPrice ] = useState(null);
  const [ randomArray, setRandomArray] = useState([]);
  const [ winner, setWinner ] = useState([0])
  const [ popupIs, setPopupIs ] = useState(false);

  
  useEffect(()=>{
      console.log(`data 발송 ${winner}`);
    let numberItems = Array.from(Array(price/1000), () => new Array(7));
    for( let ticket = 0; ticket < price/1000; ticket ++){ //장수만큼 돌리기

      for( let i = 0; i < 7; i ++){
        let random = Math.floor(Math.random() * 45 ) + 1;
        numberItems[ticket][i] = random;
        // console.log(numberItems);
        if (sameNum(random, ticket)) {      
          // numberItems.push(random);      
          i++;    
        }
        
      }
      
      // console.log(numberItems);
  
        console.log('---------------꿑꿑꿑꿑꿑꿑꿑-');
    }

    function sameNum (n, ticket) {    
      console.log(numberItems[ticket]);
      numberItems[ticket].filter( item => {
        if(numberItems[ticket].indexOf(item) ){

          console.log(`같은것 ${item}`)
        }
        //  if( item === n ) console.log('test')
      });
    };  

    setRandomArray(numberItems)
  }, [price, winner])


  return (
    <main>
      <h1>인생 한방, 행운의 🎱LOTTO</h1>
      <div className='inner'>
        <p className='notice'>구입할 금액을 입력해주세요.</p>
        <TicketBox setPrice={setPrice}></TicketBox>
        { true &&  <LottoInfo setPrice={setPrice} price={price} randomArray={randomArray} setPopupIs={setPopupIs} setWinner={setWinner} winner={winner} />}
        
        { popupIs && <Modal setPopupIs={setPopupIs} />}
      </div>
    </main>
  );
}

export default App;
