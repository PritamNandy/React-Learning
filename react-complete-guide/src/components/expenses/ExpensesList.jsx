import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

export default function ExpensesList(props) {
    const filteredExpense = props.items;
    if(filteredExpense.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>No Expenses Found</h2>
        )
    }

    return (
        <ul className='expenses-list'>
                {
                    filteredExpense.map((value, index) => (
                        <ExpenseItem key={index} title={value.title} price={value.amount} date={value.date} />  
                        ))
                }
            </ul>
    )
}
