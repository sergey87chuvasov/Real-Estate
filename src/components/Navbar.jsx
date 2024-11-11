import { useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt='logo pic' />
        <ul className='hidden md:flex gap-7 text-white'>
          <a className='cursor-pointer hover:text-gray-400' href='#Header'>
            Home
          </a>
          <a className='cursor-pointer hover:text-gray-400' href='#About'>
            About
          </a>
          <a className='cursor-pointer hover:text-gray-400' href='#Projects'>
            Projects
          </a>
          <a
            className='cursor-pointer hover:text-gray-400'
            href='#Testimonials'
          >
            Testimonials
          </a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>
          Sign up
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt='icon pic'
          className='md:hidden w-7 cursor-pointer'
        />
      </div>
      {/* // burger for mobile-menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? 'fixed w-full' : 'h-0 w-0'
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className='flex justify-end p-6 cursor-pointer'>
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            alt='icon pic'
            className='w-6'
          />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a href='#Header' className='px-4 py-2 rounded-full inline-block'>
            Home
          </a>
          <a href='#About' className='px-4 py-2 rounded-full inline-block'>
            About
          </a>
          <a href='#Projects' className='px-4 py-2 rounded-full inline-block'>
            Projects
          </a>
          <a
            href='#Testimonials'
            className='px-4 py-2 rounded-full inline-block'
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
