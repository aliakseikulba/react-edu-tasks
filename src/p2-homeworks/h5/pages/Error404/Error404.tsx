import React from 'react';
import {Link} from 'react-router-dom';

export function Error404() {
  return (
    <div>
      <div>404</div>
      <div>Page not found!</div>
      <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
      <Link to='/'>GO HOME</Link>
    </div>
  );
}

