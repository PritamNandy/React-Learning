import React, { useState } from 'react';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';


function App() {
  const [userList, setUserList] = useState([]);
  return (
    <div>
      <AddUser setUserList={setUserList} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
