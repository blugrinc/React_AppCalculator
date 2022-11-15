import React, { useContext } from 'react'
import { CalculatorContext } from '../../context/CalculatorContext'

//Con className statico, tutti i bottoni avranno lo stesso CSS, per modificare singoli bototni
//devo rendere il className dinamico. - <button className='button'> {value} </button> -
const Button = ({ value }) => {
  //Prendo e instanzio le variabili del Context
  const { calculator ,setCalc } = useContext(CalculatorContext);
  
//Funzione per il punto 
    const commaClick = () => {
      setCalc({
        // "..." Spread operator, ci permette di copiare rapidamente tutto o parte di un array o oggetto
        ...calculator,        
        num: !calculator.num.toString().includes('.') ? calculator.num + value : calculator.num
      })
  }

//funzione per resettare
    const resetClick = () => {
      setCalc({     
        sign: '',
        num: 0,
        res: 0        
      })
  }
  
  //funzione per cancellare
  const deleteClick = () => {      
    setCalc({            
        num: calculator.num.toString().slice(0,-1)
      })    
  }
  
// funzioner per stampare i numeri
  const handleClickNumber = () => {
    //value.toString prende il lavore della key che è un numero è lo converte in stringa 
    const numberString = value.toString()

    let numberValue;
    //Controllo per evitare di scrivere 000000 senza un numero primario iniziale
    if (numberString === '0' && calculator.num === 0) {
      numberValue = "0"
    } else {
      numberValue = Number(calculator.num + numberString)
    }

    setCalc({
      ...calculator,
      num: numberValue
    })
 } 
  
  //Metodo che crea l'evento al click dei pulsanti 
  const handleClick = () => { 
  
    const results = {
      //Runno la funzione commaClick 
      '.': commaClick,
      'DEL': resetClick,
      'C': deleteClick
    }
    //Se passo un valore presente dentro result, allora ritorna una delle tre funzioni.     
    if (results[ value ]) {
      return results[value]()
    } else { //se il value è undefined, ritorna questa funzione
      return handleClickNumber()
    }
  }
  
  return (
    <button onClick={handleClick} className={`${getClassName(value)} button`}> {value} </button>
  )
}

//Metodo per rendere il markup della "classe" dinamico cosi da modificare il CSS 
const getClassName = function (btn) {
    const className = {
        '=': 'equals',
        'DEL': 'delete',
        'x': 'opt',
        '/': 'opt',
        '+': 'opt',
        '-': 'opt',
    }
 //Ritorna undefined per gli altri numeri non iterati
    return className[btn]
}



export default Button