import React, { useState } from 'react'
import Button from '../ui/Button';
import Card from '../ui/Card';
import ErrorModal from '../ui/ErrorModal';
import classes from './AddUser.module.css'

export default function AddUser(props) {
    const addUserHandler = (event) => {
        event.preventDefault();
        if(username.trim().length === 0 || age.trim().length === 0) {
          setErrorShow(true)
          return;
        }
        if(+age < 0) {
          setErrorShow(true)
          return;
        }
        setUsername('')
        setAge('')
        props.setUserList((prevState) => (
          [
            ...prevState,
            {
              username: username,
              age: age
            }
          ]
        ))
    }
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [errorShow, setErrorShow] = useState(false)

    const clearError = () => {
      setErrorShow(false)
    }

    const onUserInputChange = (event) => {
      if(event.target.name === 'username') {
        setUsername(event.target.value)
      }

      if(event.target.name === 'age') {
        setAge(event.target.value)
      }
    }

  return (
    <>
      { errorShow && <ErrorModal clearError={clearError} title="An error occurred" message="Add value for both input fields" />}
      <Card classes={classes.input}>
          <form onSubmit={addUserHandler}>
              <label htmlFor="username">Username</label>
              <input id='username' type="text" value={username} name="username" onChange={onUserInputChange} /> 

              <label htmlFor="age">Age (years)</label>
              <input id='age' type="number" value={age} name="age" onChange={onUserInputChange} /> 

              <Button type='submit'>Add User</Button>
          </form>
      </Card>
    </>
  )
}
