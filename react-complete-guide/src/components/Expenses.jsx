import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

export default function Expenses(props) {
  return (
    <div className='expenses'>
        {props.items.map((value, index) => (
          <ExpenseItem key={index} title={value.title} price={value.amount} date={value.date} />  
        ))}
    </div>
  )
}
