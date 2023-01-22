import React from 'react'
import classes from './UserList.module.css'
import Card from '../ui/Card'

export default function UserList(props) {
  return (
    <Card classes={classes.users}>
        <ul>
            {props.users.map(user => (
                <li key={user.username}>{user.username}</li>
            ))}
        </ul>
    </Card>
  )
}
