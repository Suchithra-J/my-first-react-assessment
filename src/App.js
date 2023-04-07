import logo from "./logo.svg";
import "./App.css";

import Expenses from "./components/Expense/Expenses";
import NewExp from "./components/Forms/NewExp";
function App() {
  // store some dummy arrys
  const expense = [
    {
      id: "e1",
      title: "Car Isurence",
      amount: 12.99,
      date: new Date(2021, 1, 1),
    },
    {
      id: "e2",
      title: "Bike Isurence",
      amount: 13.99,
      date: new Date(2021, 2, 10),
    },
    {
      id: "e3",
      title: "Bus Isurence",
      amount: 13.99,
      date: new Date(2021, 3, 20),
    },
    {
      id: "e4",
      title: "Personal Isurence",
      amount: 14.99,
      date: new Date(2021, 4, 25),
    },
  ];

  const addExpHandler = (addExpList) =>
  {
    const list = {
      ...addExpList,
    }

    console.log(list);
  }

  return (
    <div className="App">
      <h2>Expenses Items List</h2>
      {/* custom components\ */}
      <NewExp onAddExp={addExpHandler}/>
      <Expenses items={expense}/>
      
    </div>
  );
}

export default App;
