
import ExpForm from "./ExpForm";
import './NewExp.css';

const NewExp = (porps) =>
{
    const saveDataHandler = (ExpDataList) =>
    {
        const ExpenseList = {
            ...ExpDataList,
            id:Math.random().toString()
        };

        // console.log(ExpenseList);
        porps.onAddExp(ExpenseList);
    }

    return <div className="new-expense">
        <ExpForm onSaveChange={saveDataHandler}/>
    </div>;
}

export default NewExp;