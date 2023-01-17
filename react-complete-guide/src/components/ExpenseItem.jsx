import React from 'react'
import './ExpenseItem.css'

export default function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Expenses';
  const expensePrice = '$1000.67';
  return (
    <div className='expense-item'>
        <div>
            {expenseDate.toString()}
        </div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
        </div>
        <div className='expense-item__price'>
            {expensePrice}
        </div>
    </div>
  )
}
