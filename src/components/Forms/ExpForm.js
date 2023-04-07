import React, { useState } from "react";

import "./ExpForm.css";

const ExpForm = (props) => {
  const [enterTitle, setTitle] = useState("");
  const [enterAmount, setAmount] = useState("");
  const [enterDate, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const clickSubmitHandler = (event) => {
    event.preventDefault();

    const data = {
      title: enterTitle,
      amount: enterAmount,
      date: enterDate,
    };

    // console.log(data);
    props.onSaveChange(data);
    setTitle ("")
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={clickSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label for="">Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label for="">Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label for="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="Submit">Add Lists</button>
      </div>
    </form>
  );
};

export default ExpForm;
