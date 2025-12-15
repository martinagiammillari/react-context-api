
// PRIMA COSA DA FARE, import

import React, { createContext, useState, useContext } from 'react';

const BudgetContext = createContext();
// ORA CREO PROVIDER E CONSUMER


//CREO SUBITO FUNZIONE CON RETURN, SENZA LOGICA INTERNA
// poi mi serve value (contextvalue)
// poi funzione usebudget che ritorna contextvalue (è LA MIA HOOK)
// poi gestisco stato globale
function BudgetProvider({ children }) {
    const [isBudget, setIsBudget]= useState(false); //QUA GESTISCO STATO GLOBALE

    function toggleBudget(){
        setIsBudget((current)=>!current);
    }

    const contextValue = { //       QUA PASSO CONTEXTVALUE
        isBudget, //è in budget mode?
        toggleBudget, //switch delle modalità
    }
    return (

        <BudgetContext.Provider value={contextValue}>{children}
        </BudgetContext.Provider> //LE ROTTE SONO I CHILDREN
    )
}

function useBudget(){ //hook
    const contextValue = useContext(BudgetContext);
    return contextValue; //QUA PRELEVO CONTEXTVALUE
}

export {BudgetProvider, useBudget,};