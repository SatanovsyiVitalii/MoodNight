import React, { useEffect, useState, useCallback, EventHandler, ChangeEvent } from 'react';
import { CreateUserDto, User } from './services/openapi';
import { getUsers, createUser } from './services/api/user';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const [formValue, setFormValue] = useState<CreateUserDto>({ email: '', password: '' });

  const getUsersFetch = useCallback(async () => {
    const users = await getUsers();
    setUsers(users);
  }, []);

  const signIn = useCallback(async () => {

  }, []);

  const signUp = useCallback(async () => {
    await createUser(formValue.email, formValue.password);
    await getUsers();
  }, [formValue]);

  useEffect(() => {
    getUsersFetch();
  }, [getUsersFetch]);

  return (
    <div className="App">
      <label htmlFor='email'>
        Email: <input
          onChange={(event: ChangeEvent) =>
            setFormValue({ ...formValue, email: (event.target as HTMLInputElement).value })
          }
          id='email'
        />
      </label>
      <label htmlFor='password'>
        Password: <input
          id='password'
          onChange={(event: ChangeEvent) =>
            setFormValue({ ...formValue, password: (event.target as HTMLInputElement).value })
          }
        />
      </label>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signUp}>Sign Up</button>
      <ul>
        {users.map((user) => <li key={user.id}>{user.email}</li>)}
      </ul>
    </div>
  );
}

export default App;
