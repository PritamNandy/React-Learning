import React from 'react'
import classes from './UserList.module.css'
import Card from '../ui/Card'

export default function UserList(props) {
  return (
    <Card className={classes.user}>
        <ul>
            {props.users.map(user => (
                <li>{user.username}</li>
            ))}
        </ul>
    </Card>
  )
}
