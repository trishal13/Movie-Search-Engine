import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SingleMovie from "./components/SingleMovie";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/movie/:id' element={<SingleMovie></SingleMovie>}></Route>
      </Routes>
    </div>
  )
}

export default App;