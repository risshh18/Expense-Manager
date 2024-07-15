import React from "react";
import { useState } from "react";
import AddExpense from "./AddExpense";
import Feilds from "./Feilds";
import "./Personal.css";

function Personal() {
  const Entries = [];
  const [entries, setEntries] = useState(Entries);
  const [totalamt, setTotalamt] = useState();
  const expenseData = (e) => {
    setEntries((prevEntries) => {
      return [...prevEntries, e];
    });
  };

  const totalAmt = (e) => {
    setTotalamt(e);
  };

  return (
    <div>
      <div className="container">
        <h2 className="Heading">Manage and monitor your personal finances</h2>
        <AddExpense onSaveExpenseData={expenseData} onTotal={totalAmt} />
      </div>
      <div className="Feilds">
        <div className="purpose">Purpose</div>
        <div className="amount">Amount</div>
      </div>
      {entries.map((e) => (
        <div>
          <Feilds purpose={e.purpose} amount={e.amount} />
        </div>
      ))}
      <div className="totalFeild">
        <div className="amount">Total : {totalamt}</div>
      </div>
    </div>
  );
}
export default Personal;
