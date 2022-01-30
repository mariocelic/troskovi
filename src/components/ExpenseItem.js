import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

const ExpenseItem = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li key={transaction.id}>
      <p>
        {transaction.expense}
        <span>
          {sign}
          {transaction.amount}kn
        </span>
      </p>
      <button onClick={() => deleteTransaction(transaction.id)}>Obriši</button>
    </li>
  );
};

export default ExpenseItem;
