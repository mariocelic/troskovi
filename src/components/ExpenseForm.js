import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

const ExpenseForm = () => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      expense: expense,
      amount: +amount
    };

    addTransaction(newTransaction);
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>Dodaj novi trošak</legend>
          <div>
        <p>
            <label>Ime troška </label>
          
          <input
            type="text"
            name="expense"
            id="expense"
            placeholder="Trošak..."
            required
            value={expense}
            onChange={(event) => setExpense(event.target.value)}
          />
        </p>
        <p>
          
            <label>Iznos troška(kn) </label>
          <input
            type="text"
            name="amount"
            id="amount"
            placeholder="Iznos..."
            required
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </p>
        </div>
        <button type="submit">Dodaj trošak</button>
      </fieldset>
    </form>
  );
};

export default ExpenseForm;
