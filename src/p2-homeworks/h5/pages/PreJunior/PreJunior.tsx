import React from 'react';
import s from './PreJunior.module.css'
import HW1 from '../../../h1/HW1';
import HW2 from '../../../h2/HW2';
import HW3 from '../../../h3/HW3';
import HW4 from '../../../h4/HW4';
import HW6 from '../../../h6/HW6';

export function PreJunior() {
  return (
    <div className={s.wrapper}>
      <div><HW1/></div>
      <div><HW2/></div>
      <div><HW3/></div>
      <div><HW4/></div>
      <div><HW6/></div>

    </div>
  );
}