import React, { useEffect, useState, useCallback } from 'react';
import { User } from './services/openapi';
import { getUsers } from './services/api/user';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  console.log('users', users);
  const getUsersFetch = useCallback(async () => {
    const users = await getUsers();
    setUsers(users);
  }, []);

  useEffect(() => {
    getUsersFetch();
  }, [getUsersFetch]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
