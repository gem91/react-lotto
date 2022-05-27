import React, { useState } from 'react';
import MyTickets from '../MyTickets';
import WinNumbers from '../WinNumbers';


const LottoInfo = ({setPrice, price, randomArray, setPopupIs, setWinner, winner}) => {
      const [ toggleIs, setToggleIs ] = useState(false)
     
    return(
        <>
            <MyTickets setPrice={setPrice} price={price} randomArray={randomArray} setToggleIs={setToggleIs} toggleIs={toggleIs} />
            <WinNumbers setPopupIs={setPopupIs} setWinner={setWinner} winner={winner} />
        </>
    )
}

export default LottoInfo;