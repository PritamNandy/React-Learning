import React, { useState } from 'react'
import Card from '../ui/Card'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

export default function Expenses(props) {
  const [year, setYear] = useState('2023')
  const onYearChange = (selectedYear) => {
    setYear(selectedYear)
    console.log(selectedYear)
  }

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  })

  return (
    <Card className='expenses'>
      <div>
        <ExpensesFilter selectedYear={year} onYearChange={onYearChange} />
      </div>
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList items={filteredExpense} />
    </Card>
  )
}
