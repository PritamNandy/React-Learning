import React from 'react'
import Card from '../ui/Card';
import classes from './AddUser.module.css'

export default function AddUser() {
    const addUserHandler = (event) => {
        event.preventDefault();
    }

  return (
    <Card classes={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id='username' type="text" /> 

            <label htmlFor="age">Age (years)</label>
            <input id='age' type="number" /> 

            <button type='submit'>Add User</button>
        </form>
    </Card>
    
  )
}
