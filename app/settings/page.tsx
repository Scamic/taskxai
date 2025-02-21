import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='flex justify-center items-center h-screen mt-28'>
        <UserProfile routing='hash'/>
    </div>
  )
}

export default Settings