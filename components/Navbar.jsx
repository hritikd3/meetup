// Navbar.jsx
import React, { useContext } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { ThemeContext } from '../context/ThemeContext';
const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <header
      className={
        theme === 'dark' ? ' bg-zinc-800 text-white' : ' bg-gray-200 text-black'
      }
    >
      <div
        className={`container max-w-[1200px] mx-auto w-[95%] flex justify-between items-center py-4 `}
      >
        <h1 className='text-2xl font-semibold'>
          <Link href={'/'}>MeetUp</Link>
        </h1>

        <div className='flex gap-2 items-center'>
          <Button variant='ghost' className='p-2' onClick={toggleTheme}>
            {theme === 'dark' ? (
              <SunIcon className='w-6 h-6' />
            ) : (
              <MoonIcon className='w-6 h-6' />
            )}
          </Button>
          <Button variant='outline'> New meeting</Button>
          <Button variant=''>Get started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
