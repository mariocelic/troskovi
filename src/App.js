import React from "react";

import ExpenseBalance from "./components/ExpenseBalance";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseHistory from "./components/ExpenseHistory";

export default function App() {
  return (
    <div className="App">
      <h2>Kucni budzet</h2>
      <div>
        <ExpenseBalance />
      </div>
      <ExpenseForm />
      <ExpenseHistory />
    </div>
  );
}
