import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeContext } from '@/context/ThemeContext';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useContext } from 'react';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === 'dark' ? ' bg-zinc-800 text-white' : ' bg-gray-200 text-black'
      }
    >
      <main className={`container w-[95%] mx-auto max-w-[1200px] `}>
        <div className='md:flex gap-8 flex-row-reverse justify-between items-center min-h-[92vh] py-4 md:py-8'>
          <div className='basis-5/10'>
            <Image
              width={500}
              height={500}
              className='w-[60%] md:w-[80%] mx-auto md:ml-auto aspect-square'
              src={'https://illustrations.popsy.co/white/shaking-hands.svg'}
              alt='hero'
              loading='lazy'
            />
          </div>
          <div className='md:grow flex md:block flex-col justify-center items-center'>
            <h1 className='text-center md:text-left text-4xl md:text-6xl mb-4 font-bold md:leading-snug'>
              Meet. <br /> Anytime. <br /> Anywhere.
            </h1>
            <p className='text-center md:text-left w-8/12 mb-4'>
              Transforming ideas into reality to boost productivity, increase
              efficiency, and drive results !!
            </p>

            <div className='flex w-full max-w-sm items-center space-x-2'>
              <Input type='text' placeholder='Enter room id' />
              <Button className='flex items-center gap-2'>
                Join <ArrowLongRightIcon className='w-6 h-6' />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
