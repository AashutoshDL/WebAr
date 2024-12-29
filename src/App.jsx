import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GoKartViewer from './components/GoKart/GoKartViewer';
import HiluxViewer from './components/Hilux/HiluxViewer';
import Layout from './components/Layout/Layout';
import Room from './components/Room/Room';

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='/goKart' element={<GoKartViewer />} />
        <Route path='/hilux' element={<HiluxViewer/>} />
        <Route path='/room' element={<Room/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App