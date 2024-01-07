// Navbar.jsx
import React, { useContext } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { ThemeContext } from '../context/ThemeContext'; // Add the correct path

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <header>
      <div className={`container max-w-[1200px] mx-auto w-[95%] flex justify-between items-center py-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
        <h1 className='text-2xl font-semibold'>
          <Link href={'/'}>MeetUp</Link>
        </h1>

        <div className='flex gap-2 items-center'>
          <Button variant='ghost' className='p-2' onClick={toggleTheme}>
            {theme === 'dark' ? <SunIcon className='w-6 h-6' /> : <MoonIcon className='w-6 h-6' />}
          </Button>
          <Button variant='outline'> New meeting</Button>
          <Button variant=''>Get started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
