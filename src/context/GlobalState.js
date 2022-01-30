import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

//Initial state
const initialState = {
  transactions: [
    {
      id: 1,
      expense: "Hrana",
      amount: -200
    },
    {
      id: 2,
      expense: "Plaća",
      amount: 5000
    },
    {
      id: 3,
      expense: "Internet",
      amount: -300
    }
  ]
};

//Create context
export const GlobalContext = createContext(initialState);

//Global provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction 
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
