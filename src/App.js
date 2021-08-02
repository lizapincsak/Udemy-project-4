import React from 'react';
import UsersList from './components/Users/UsersList';
import AddUser from './components/Users/AddUser';

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]}/>
    </div>
  );
}

export default App;
