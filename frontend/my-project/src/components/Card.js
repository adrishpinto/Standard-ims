import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

function Card() {
  return (
    <div className='bg-red-500 w-full h-screen dark:bg-blue-400'>
        <div className="flex justify-center items-center h-screen">
          <ThemeSwitcher />
        </div>
    </div>
  );
}

export default Card;