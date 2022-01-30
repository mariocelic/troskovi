import React, { useContext } from "react";

import ExpenseItem from "./ExpenseItem";
import { GlobalContext } from "../context/GlobalState";

const ExpenseHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <h4>Dosadašnji troškovi</h4>
      <ol>
        {transactions.map((transaction) => (
          <ExpenseItem key={transaction.id} transaction={transaction} />
        ))}
      </ol>
    </React.Fragment>
  );
};

export default ExpenseHistory;
