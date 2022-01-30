import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

const ExpenseBalance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const prihod = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const trosak = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div>
      <div>
        <h3>Trenutno stanje: {total}kn</h3>
      </div>
      <div>
        <div>
          <h4>Prihodi: </h4>
          <p> + {prihod}kn </p>
        </div>
        <div>
          <h4>Troškovi:</h4>
          <p> {trosak}kn </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseBalance;
