import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {PATH} from './PageRoutes';

function Header() {

  const linkClass = ({isActive}: { isActive: boolean }) => isActive ? s.active + ' ' + s.link : s.link;

  return (
    <div className={s.navigation}>
      <div className={s.links}>
        <NavLink to={PATH.PRE_JUNIOR} className={linkClass}>PRE-JUNIOR</NavLink>
        <NavLink to={PATH.JUNIOR} className={linkClass}>JUNIOR</NavLink>
        <NavLink to={PATH.JUNIOR_PLUS} className={linkClass}>JUNIOR+</NavLink>
      </div>
      <div className={s.navigationTitle}>Levels navigation</div>
    </div>
  );
}

export default Header;
