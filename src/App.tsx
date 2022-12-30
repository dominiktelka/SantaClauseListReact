import React from 'react';

import './App.css';
import {GiftsView} from './views/GiftsView'


import {Route, Routes} from 'react-router-dom';
import {TestView} from "./views/TestView";
import {Header} from "./components/Header/Header";
import { NotFoundView } from './views/NotFoundView';

export const App = () => {
  return (<>
          <Header/>
          <Routes>
              <Route path='/gift' element={<GiftsView/>}></Route>
              <Route path='/test' element={<TestView/>}></Route>
              <Route path='*' element={<NotFoundView/>}></Route>
          </Routes>
      </>

  );
}

