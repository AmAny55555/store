'use client'
import { UserButton } from '@clerk/nextjs'

function CustomUserCircle() {
  return (
    <UserButton
      afterSignOutUrl="/" 
      appearance={{
        elements: {
          userButtonTrigger: 'w-10 h-10 bg-orange-600 text-white text-sm font-semibold rounded-full flex items-center justify-center shadow',
        },
        variables: {
          colorPrimary: '#ea580c', 
        },
      }}
      showName={false} 
    />
  )
}

export default CustomUserCircle;
