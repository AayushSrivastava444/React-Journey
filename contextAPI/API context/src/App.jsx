import { useState } from 'react'
import UserContextProvider from "./Context/UserContextProvider.jsx";
import Login from "./Components/Login.jsx";
import Profile from "./Components/Profile.jsx";
import './App.css'

function App() {
  return (
      <UserContextProvider>
        <h1>HELLO AAYUSH</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
      
  )
}

export default App
