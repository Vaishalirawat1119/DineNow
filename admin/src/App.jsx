import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar/>
      <hr className='h-px border-[none]' />
      <div className='flex'>
        <Sidebar/>
      </div>
    </div>
  )
}

export default App