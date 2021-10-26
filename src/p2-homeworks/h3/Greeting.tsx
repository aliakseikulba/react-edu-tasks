import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  error: string
  totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers}
) => {
  const inputClass = error === '' ? s.addInput : s.errorInput;
  const buttonClass = error === '' ? s.addButton : s.errorButton;

  const onKeyPressHandle = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addUser();
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
      <div className={s.addFormBlock}>
          <input
            value={name}
            placeholder='user name...'
            onChange={setNameCallback}
            className={inputClass}
            onKeyPress={onKeyPressHandle}/>
          <button className={buttonClass} onClick={addUser}>add</button>
        <div className={s.errorTip}>{error}</div>
        </div>
        <div className={s.usersCount}>
          <h1>number of users</h1>
          <div>{totalUsers}</div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
