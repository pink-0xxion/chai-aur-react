import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='bg-gray-600 text-white text-3xl flex justify-center mx-12 p-4'>
      User: {userid}
    </div>
  )
}

export default User
