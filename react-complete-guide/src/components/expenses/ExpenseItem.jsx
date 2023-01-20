import React, { useState } from 'react'
import Card from '../ui/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)
  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
            <h2>{title}</h2>
        </div>
        <div className='expense-item__price'>
            ${props.price}
        </div>
    </Card>
  )
}
