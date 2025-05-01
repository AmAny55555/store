'use client'
import { UserButton } from '@clerk/nextjs'

function CustomUserCircle() {
  return (
    <UserButton
      afterSignOutUrl="/" // الصفحة التي ستنتقل إليها بعد تسجيل الخروج
      appearance={{
        elements: {
          userButtonTrigger: 'w-10 h-10 bg-orange-600 text-white text-sm font-semibold rounded-full flex items-center justify-center shadow',
        },
        variables: {
          colorPrimary: '#ea580c', // تغيير اللون الأساسي
        },
      }}
      showName={false} // لا تظهر الاسم الكامل، فقط الحرف الأول
    />
  )
}

export default CustomUserCircle;
