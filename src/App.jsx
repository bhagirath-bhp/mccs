import { useState } from 'react'
import './App.css'
import ComingSoonPage from './pages/ComingSoonPage'
// import ParticlesPage from './pages/ParticlesPage'

export default function App() {
  return (
    <div className='font-metropolis bg-black h-screen smMobile:overflow-y-scroll mobile:overflow-y-hidden smMobile:py-[5rem] tablet:p-0'>
      {/* <ParticlesPage /> */}
      <ComingSoonPage />
    </div>
  )
}
