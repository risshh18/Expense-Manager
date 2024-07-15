import React from "react";
import { useState } from "react";
import EditExpense from "./EditExpense";
import "./Feilds.css";

function Feilds(props) {
  const [pur, setPur] = useState(props.purpose);
  const [amt, setAmt] = useState(props.amount);
  const editData = (e) => {
    setPur(e.purpose);
    setAmt(e.amount);
  };
  return (
    <div>
      <div className="entries">
        <div className="edit">
          <EditExpense onEditData={editData} purpose={pur} amount={amt} />
          <div className="Purpose">{pur}</div>
        </div>
        <div className="Amount">{amt}</div>
      </div>
      <div>{props.totalAmt}</div>
    </div>
  );
}

export default Feilds;
