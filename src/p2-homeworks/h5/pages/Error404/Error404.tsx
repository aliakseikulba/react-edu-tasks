import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Error404.module.css';


export function Error404() {

  return (
    <div className={s.wrapper}>
      <div className={s.errorMessage}>404</div>
      <div className={s.errorMessage}>Page not found!</div>
      <div className={s.errorMessage}>¯\_(ツ)_/¯</div>
      <NavLink to='/' className={s.link}>GO HOME</NavLink>
    </div>
  );
}

