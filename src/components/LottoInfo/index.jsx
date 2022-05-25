import React, { useState } from 'react';
import MyTickets from '../MyTickets';
import WinNumbers from '../WinNumbers';


const LottoInfo = ({setPrice, price, randomArray}) => {
      const [ toggleIs, setToggleIs ] = useState(false)
      const tickets = price/1000; // 티켓 장수
     
    return(
        <>
            <MyTickets setPrice={setPrice} price={price} randomArray={randomArray} setToggleIs={setToggleIs} toggleIs={toggleIs} />
            <WinNumbers />
        </>
    )
}

export default LottoInfo;