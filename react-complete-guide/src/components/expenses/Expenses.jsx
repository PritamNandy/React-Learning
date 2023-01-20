import React, { useState } from 'react'
import Card from '../ui/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

export default function Expenses(props) {
  const [year, setYear] = useState('2023')
  const onYearChange = (selectedYear) => {
    setYear(selectedYear)
    console.log(selectedYear)
  }
  return (
    <Card className='expenses'>
      <div>
        <ExpensesFilter onYearChange={onYearChange} />
      </div>
        {props.items.map((value, index) => (
          <ExpenseItem key={index} title={value.title} price={value.amount} date={value.date} />  
        ))}
    </Card>
  )
}
