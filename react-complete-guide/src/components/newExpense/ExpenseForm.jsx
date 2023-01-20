import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm() {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const changeHandler = (event) => {
        // NOT A GOOD WAY TO OVERWRITE
        // setUserInput({
        //     ...userInput,
        //     [event.target.name]: event.target.value
        // })

        setUserInput((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.title,
            amount: userInput.amount,
            date: new Date(userInput.date)
        }

        setUserInput((prevState) => {
            return {
                ...prevState,
                title: '',
                amount: '',
                date: ''
            }
        })
    }

  return (
    <div>
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input type="text" 
                    value={userInput.title}
                    name='title'
                    onChange={changeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0" step="0.01"
                    name='amount'
                    value={userInput.amount}
                    onChange={changeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" step="2023-12-31" 
                    value={userInput.date}
                    name='date'
                    onChange={changeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'
                onClick={submitHandler}>Add Expense</button>
            </div>
        </form>
    </div>
  )
}
