import React, {useState} from 'react';
import GreetingContainer from './GreetingContainer';
import {v1} from 'uuid';

// types
export type UserType = {
  _id: string
  name: string
}

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<UserType[]>([]);

  const addUserCallback = (name: string) => {
    setUsers([...users, {_id: v1(), name}]);
  };

  return (
    <div>
      <GreetingContainer users={users} addUserCallback={addUserCallback}/>
    </div>
  );
}

export default HW3;
