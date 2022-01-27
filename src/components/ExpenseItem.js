import React from "react";

const ExpenseItem = ({ transaction }) => {
  return (
    <li>
      <p>
        {transaction.name}
        <span>
          {transaction.amount}kn
        </span>
      </p>
      <button>Obriši</button>
    </li>
  );
};

export default ExpenseItem;
