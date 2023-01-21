import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {
  const [showExpense, setShowExpense] = useState(false)
    const onSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }

    const onCancelBtn = () => {
      setShowExpense((prevState) => !prevState)
    }

  return (
    <div className="new-expense">
      { showExpense ? 
        <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={onCancelBtn} /> : 
        <div className='new-expense__actions' style={{textAlign: 'center'}}>
                <button type='button' onClick={() => setShowExpense((prevState) => !prevState)}>Add New Expense</button>
        </div>
      }
        
    </div>
  )
}

