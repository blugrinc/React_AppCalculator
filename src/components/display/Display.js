import { CalculatorContext } from '../../context/CalculatorContext'
import React, { useContext } from 'react'
import { Textfit } from 'react-textfit';


const Display = () => {
  const { calculator } = useContext(CalculatorContext) //Questa mi serve per richiamare CalcContex e prendere .num e -sing .res
  
  //<div className='display'>12345</div> - lo sostituisco con tsxFit
  //lo installo con npm i react-textfit
  return (
    //operatore ternario - se è un numero, dammi il numero se no res(0)
    <Textfit  className='display'>{calculator.num ? calculator.num : calculator.res}</Textfit>
  )
}

export default Display 