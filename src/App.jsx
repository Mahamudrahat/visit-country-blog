import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Countries/Countries'
import Countries from './Countries/Countries'

function App() {

  return (
    <>
      <h3>My Visit Country Blog</h3>
      <Countries></Countries>
    </>
  );
}

export default App
