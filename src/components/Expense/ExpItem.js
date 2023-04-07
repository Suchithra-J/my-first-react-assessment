import React, {useState} from 'react';

import "./ExpItem.css";
import ExpDate from "./ExpDate";
import Card from '../UI/Card';

const ExpItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const handler = () =>
  {
    setTitle('Updated!!!')
    console.log(title);//display the values in consle
  }
  //JSX code
  return (
    <Card className="expense-item">
      <ExpDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <div>
        <button type="Submit" onClick={handler}>Submit</button>
      </div>
    </Card>
  );
};

export default ExpItem;
