import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes,createBrowserRouter } from 'react-router-dom'
import Login from './components/login';
import Signup from './components/signup';
import Todo from './components/todo';

function App() {
  

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/todo' element={<Todo />} />
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
