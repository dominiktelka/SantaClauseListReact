import React from 'react';

import './App.css';
import {GiftsView} from './views/GiftsView'


import {Route, Routes} from 'react-router-dom';
import {ChildView} from "./views/ChildView";
import {Header} from "./components/Header/Header";
import { NotFoundView } from './views/NotFoundView';
import { SingleGiftView } from './views/SingleGiftView';

export const App = () => {
  return (<>
          <Header/>
          <Routes>
              <Route path='/gift' element={<GiftsView/>}></Route>
              <Route path='/gift/:idOfGift' element={<SingleGiftView/>}></Route>
              <Route path='/child' element={<ChildView/>}></Route>
              <Route path='*' element={<NotFoundView/>}></Route>
          </Routes>
      </>

  );
}

