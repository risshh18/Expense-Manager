import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function EditExpense(props) {
  const [show, setShow] = useState(false);
  const [editPurpose, setEditPurpose] = useState(props.purpose);
  const [editAmount, setEditAmount] = useState(props.amount);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editAmountHandler = (event) => {
    setEditAmount(event.target.value);
  };
  const editPurposeHandler = (event) => {
    setEditPurpose(event.target.value);
  };
  const editHandler = () => {
    const editData = {
      purpose: editPurpose,
      amount: editAmount,
    };
    if (editPurpose.trim().length === 0 || editAmount.trim().length === 0) {
      return;
    }
    props.onEditData(editData);
  };

  return (
    <>
      <div style={{ paddingLeft: "2rem" }}>
        <button
          className="edit"
          onClick={handleShow}
          style={{
            color: "aliceblue",
            fontWeight: "bold",
            backgroundColor: "blueviolet",
            borderRadius: "1rem",
          }}
        >
          Edit
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
              Edit Expense
            </h3>
          </Modal.Header>
          <div style={{ marginTop: "1rem" }}>
            <input
              onChange={editPurposeHandler}
              value={editPurpose}
              type="text"
              placeholder="Purpose"
              style={{ width: "60%", marginLeft: "1rem" }}
            />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <input
              onChange={editAmountHandler}
              value={editAmount}
              type="number"
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
              onClick={editHandler}
              style={{
                color: "aliceblue",
                fontWeight: "bold",
                backgroundColor: "blueviolet",
              }}
              type="submit"
              className="btn"
              variant="primary"
            >
              Edit
            </button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
}

export default EditExpense;
