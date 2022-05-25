import { useState, useEffect } from 'react';
import './app.css';
import LottoInfo from './components/LottoInfo';
import TicketBox from './components/BuyTickets';

function App() {

  const [ price, setPrice ] = useState(null);

  const [ randomArray, setRandomArray] = useState(
      [1, 11, 42, 25,13, 24, 45]
    );

  useEffect(()=>{

    for( let ticket = 0; ticket < price/1000; ticket ++){

      for( let i = 0; i < 7; i ++){
        // const newArray = new Array(7).fill().map( (i, idx) => idx)
        let randomNumber = Math.floor(Math.random() * 45 ) + 1;
      
        if( randomNumber === randomArray){
          randomNumber = Math.floor(Math.random() * 45 ) + 1;
          return randomNumber;
        }
        setRandomArray(randomArray.push(randomNumber));
      }
    }
   
  }, [price])



  return (
    <main>
      <h1>인생 한방, 행운의 🎱LOTTO</h1>
      <div className='inner'>
        <p className='notice'>구입할 금액을 입력해주세요.</p>
        <TicketBox setPrice={setPrice}></TicketBox>
        { true &&  <LottoInfo setPrice={setPrice} price={price} randomArray={randomArray} />}
      </div>
    </main>
  );
}

export default App;
