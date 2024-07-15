import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

let totalAmt = 0;
function AddExpense(props) {
  const [show, setShow] = useState(false);
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState("");

  const purposeChangeHandler = (event) => {
    setPurpose(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = () => {
    if (purpose.trim().length === 0 || amount.trim().length === 0) {
      return;
    }
    totalAmt = totalAmt + Number(amount);
    const expenseData = {
      purpose: purpose,
      amount: amount,
    };
    props.onTotal(totalAmt);
    props.onSaveExpenseData(expenseData);
    setPurpose("");
    setAmount("");
  };

  return (
    <>
      <div className="addEx">
        <button
          onClick={handleShow}
          style={{
            color: "aliceblue",
            fontWeight: "bold",
            backgroundColor: "blueviolet",
          }}
          className="btn"
        >
          Add Expense
        </button>
      </div>
      <form>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <h3 style={{ paddingLeft: "0rem" }} className="Sub Heading">
              Add Expense
            </h3>
          </Modal.Header>
          <div style={{ marginTop: "1rem" }}>
            <input
              value={purpose}
              type="text"
              onChange={purposeChangeHandler}
              placeholder="Purpose"
              style={{ width: "60%", marginLeft: "1rem" }}
            />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <input
              value={amount}
              type="number"
              onChange={amountChangeHandler}
              placeholder="Amount"
              style={{ width: "60%", marginLeft: "1rem", marginBottom: "1rem" }}
            />
          </div>

          <Modal.Footer>
            <button
              style={{
                color: "aliceblue",
                fontWeight: "bold",
                backgroundColor: "grey",
              }}
              className="btn"
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </button>

            <button
              onClick={submitHandler}
              style={{
                color: "aliceblue",
                fontWeight: "bold",
                backgroundColor: "blueviolet",
              }}
              type="submit"
              className="btn"
              variant="primary"
            >
              Add
            </button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
}

export default AddExpense;
