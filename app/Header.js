'use client';
import React, { useState } from 'react';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn, isLoaded } = useUser(); // أضف isLoaded للتحقق من تحميل حالة المستخدم

  return (
    <div className="header flex justify-between lg:px-[6%] py-3 items-center border-b border-b-gray-600 relative">
      {/* Logo */}
      <div className="logo font-bold capitalize text-2xl">
        <h1>
          <span className="text-orange-700">q</span>uic
          <span className="uppercase">c</span>art
        </h1>
      </div>

      {/* Navigation Links */}
      <div
        className={`links capitalize cursor-pointer
        ${isMenuOpen ? 'flex' : 'hidden'}
        flex-col absolute top-14 left-0 right-0 text-center py-7 bg-gray-400 text-white z-50
        lg:static lg:flex lg:flex-row lg:gap-6 lg:bg-transparent lg:text-black lg:py-0`}
      >
        <ul className="flex flex-col lg:flex-row gap-5 items-center">
        <li>
    <Link href="/homee">home</Link>
  </li>
  <li>
    <Link href="/Productt">shop</Link>
  </li>
          <li>about us</li>
          <li>contact</li>

          {/* زر Account في الموبايل (لو المستخدم غير مسجل دخول) */}
          {!isSignedIn && isLoaded && (
            <SignInButton mode="modal">
              <button className="lg:hidden cursor-pointer">Account</button>
            </SignInButton>
          )}
        </ul>
      </div>

      {/* Icons & Account */}
      <div className="icone flex gap-4 items-center">
        <i className="fa-solid fa-magnifying-glass"></i>

        {/* User Button */}
        {isLoaded ? (
          isSignedIn ? (
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonTrigger:
                    'w-10 h-10 bg-orange-600 text-white text-sm font-semibold rounded-full flex items-center justify-center shadow',
                },
                variables: {
                  colorPrimary: '#ea580c',
                },
              }}
              userProfileMode="modal"
            />
          ) : (
            <SignInButton mode="modal">
              <button className="hidden lg:block cursor-pointer">Account</button>
            </SignInButton>
          )
        ) : (
          // لو ما زالت حالة المستخدم تتحمّل، ما نعرض شيء (أو تقدر تضيف عنصر loading)
          <div className="w-10 h-10"></div>
        )}

        {/* زر الهامبورجر للموبايل */}
        <div className="text-xl cursor-pointer block lg:hidden" onClick={() => setIsMenuOpen((prev) => !prev)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
