import React  from "react";

import ExpenseItem from "./ExpenseItem";

const transactions= [
      {
        id: 1,
        name: "Hrana",
        amount: -200
      },
      {
        id: 2,
        name: "Plaća",
        amount: 5000
      },
      {
        id: 3,
        name: "Internet",
        amount: -300
      }
    ]

const ExpenseHistory = () => {
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
