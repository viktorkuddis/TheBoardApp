import './App.css'

import { useState } from 'react'

import Header from './modules/Header'


import ColumnsContainer from './modules/ColumnsContainer'


function App() {



  return (
    <div className='app_container'>

      <Header />
      <ColumnsContainer />

    </div>
  )
}

export default App
