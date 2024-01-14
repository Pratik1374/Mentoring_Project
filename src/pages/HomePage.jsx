import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate("/login");
    }

  return (
    <div className='flex min-h-screen justify-center items-center'>
      <button className='px-8 py-2 bg-cyan-300 font-bold text-2xl rounded-full hover:bg-cyan-200 text-black' onClick={handleLoginClick}>Login</button>
    </div>
  )
}

export default HomePage