import Link from 'next/link';
import { Button } from './ui/button';
import { SunIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <header>
      <div className='container max-w-[1200px] mx-auto w-[95%] flex justify-between items-center py-4'>
        <h1 className='text-2xl font-semibold'>
          <Link href={'/'}>MeetUp</Link>
        </h1>

        <div className='flex gap-2 items-center text-zinc-800 '>
          <Button variant='ghost' className='p-2'>
            <SunIcon className='w-6 h-6' />
          </Button>
          <Button variant='outline'> New meeting</Button>
          <Button variant=''>Get started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
