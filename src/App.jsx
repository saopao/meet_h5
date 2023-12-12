import React, { useState } from 'react'
import Home from './pages/home'
import TabBar from './components/tabbar/index'
import { RouterProvider } from 'react-router-dom'
import './App.css'
const App = () => {
    return (
        <div className="App">
            <Home />
            <TabBar />
        </div>
    )
}
export default App
