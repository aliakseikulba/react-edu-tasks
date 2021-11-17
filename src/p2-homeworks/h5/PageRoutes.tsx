import React from 'react';
import {Routes, Route} from 'react-router-dom'

import {PreJunior} from './pages/PreJunior/PreJunior';
import {Junior} from './pages/Junior/Junior';
import {JuniorPlus} from './pages/JuniorPlus/JuniorPlus';
import {Error404} from './pages/Error404/Error404';

export const PATH = {
  PRE_JUNIOR: '/pre-junior',
  JUNIOR: '/junior',
  JUNIOR_PLUS:'/junior-plus'
};

export function PageRoutes() {
  return (
    <div>
      <Routes>
        <Route path={PATH.PRE_JUNIOR} element={<PreJunior />}/>
        <Route path={PATH.JUNIOR} element={<Junior />}/>
        <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </div>
  );
}

