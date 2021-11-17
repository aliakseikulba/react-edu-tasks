import React from 'react'
import s from './Header.module.css'
import {Link} from 'react-router-dom';
import {PATH} from './PageRoutes';

function Header() {
    return (
        <div className={s.navigation}>
          <Link to={PATH.PRE_JUNIOR}>PRE-JUNIOR</Link>
          <Link to={PATH.JUNIOR}>JUNIOR</Link>
          <Link to={PATH.JUNIOR_PLUS}>JUNIOR+</Link>
        </div>
    )
}

export default Header
