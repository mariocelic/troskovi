import React from "react";

const ExpenseForm = () => { 
  return (
    <form>
      <fieldset>
        <legend>Dodaj novi trošak</legend>
        <p>
          <div>
            <label>Ime troška </label>
          </div>
          <input
            type="text"
            name="expense"
            id="expense"
            placeholder="Trošak..."
            required
          />
        </p>
        <p>
          <div>
            <label>Iznos troška(kn) </label>
          </div>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Iznos..."
            required
          />
        </p>
        <button type="submit">Dodaj trošak</button>
      </fieldset>
    </form>
  );
};

export default ExpenseForm;
