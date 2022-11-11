import React from 'react'

//Con className statico, tutti i bottoni avranno lo stesso CSS, per modificare singoli bototni
//devo rendere il className dinamico. - <button className='button'> {value} </button> -
const Button = ({value}) => {
  return (
    <button className={`${getClassName(value)} button`}> {value} </button>
  )
}
//Metodo per rendere la classe dinamica 
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