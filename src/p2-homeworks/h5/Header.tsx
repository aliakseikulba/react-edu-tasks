import React from 'react'
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.navigation}>
          <div>PRE-JUNIOR</div>
          <div>JUNIOR</div>
          <div>JUNIOR+</div>
        </div>
    )
}

export default Header
