import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';

type GreetingContainerPropsType = {
  users: UserType[]
  addUserCallback: (name: string) => void
}

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const nameValidation = /^[a-zA-Z]{0,30}$/;
    if (!nameValidation.test(e.currentTarget.value) && (e.currentTarget.value)) {
      setError('You have entered invalid characters. Use only a-z (not case-sensitive, less then 30' +
        ' characters).');
      setName('');
    } else {
      setName(e.currentTarget.value);
      setError('');
    }
  };

  const addUser = () => {
    if (name) {
      addUserCallback(name);
      alert(`Hello, ${name}!`);
      setName('');
    }
  };

  const onKeyPressHandle = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addUser();
    }
  };

  const totalUsers = users.length;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
      onKeyPressHandle={onKeyPressHandle}
    />
  );
};

export default GreetingContainer;
