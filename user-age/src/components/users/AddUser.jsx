import React, { useRef, useState } from 'react'
import Wrapper from '../helpers/Wrapper';
import Button from '../ui/Button';
import Card from '../ui/Card';
import ErrorModal from '../ui/ErrorModal';
import classes from './AddUser.module.css'

export default function AddUser(props) {
  const username = useRef();
  const age = useRef();
    const addUserHandler = (event) => {
        event.preventDefault();
        if(username.current.value.trim().length === 0 || age.current.value.trim().length === 0) {
          setErrorShow(true)
          return;
        }
        if(+age.current.value < 0) {
          setErrorShow(true)
          return;
        }
        // setUsername('')
        // setAge('')
        props.setUserList((prevState) => (
          [
            ...prevState,
            {
              username: username.current.value,
              age: age.current.value
            }
          ]
        ))
        username.current.value = ''
        age.current.value = ''
    }
    // const [username, setUsername] = useState('')
    // const [age, setAge] = useState('')
    const [errorShow, setErrorShow] = useState(false)

    const clearError = () => {
      setErrorShow(false)
    }

    // const onUserInputChange = (event) => {
    //   if(event.target.name === 'username') {
    //     setUsername(event.target.value)
    //   }

    //   if(event.target.name === 'age') {
    //     setAge(event.target.value)
    //   }
    // }

  return (
    <Wrapper>
      { errorShow && <ErrorModal clearError={clearError} title="An error occurred" message="Add value for both input fields" />}
      <Card classes={classes.input}>
          <form onSubmit={addUserHandler}>
              <label htmlFor="username">Username</label>
              <input id='username' type="text" name="username" ref={username} /> 

              <label htmlFor="age">Age (years)</label>
              <input id='age' type="number" name="age" ref={age} /> 

              <Button type='submit'>Add User</Button>
          </form>
      </Card>
    </Wrapper>
  )
}
