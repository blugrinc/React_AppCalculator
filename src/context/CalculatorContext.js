import React from 'react'
import { createContext, useState } from 'react'

// CreateContext consente ai componenti di trasmettere informazioni in profondità senza passare esplicitamente gli oggetti di scena.
export const CalculatorContext = createContext();
const CalculatorProvider = ({ children }) => {
//useState - serve per far aggioranre un componente cosi da renderizzare le novità, 
//per far ciò dobbiamo dichiarare una costante come internalState usando useState (HoOKS), richiede un nuovo rendering al componente
    const [ calculator, setCalc ] = useState({
        sign: "",
        num: 0,
        res: 0
    });

    const providerValue = {
        calculator, setCalc
    }

    return (
        <CalculatorContext.Provider value= {providerValue}>
            {children}
        </CalculatorContext.Provider>
    )
}

export default CalculatorProvider