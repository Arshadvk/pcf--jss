// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import { useRouter } from 'next/router'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// ** Types

// Styled component for Blank Layout component
const BlankLayoutWrapper = styled(Box)(({ theme }) => ({
  height: '100vh',

  // For V1 Blank layout pages
  '& .content-center': {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(5)
  },

  // For V2 Blank layout pages
  '& .content-right': {
    display: 'flex',
    minHeight: '100vh',
    overflowX: 'hidden',
    position: 'relative'
  }
}))

const UserLayout = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
    const router = useRouter()
 
    const isActive = (path) => {
        return router.pathname === path ? 'text-black' : 'text-gray-400 hover:text-gray-900';
      }

  return (
    <BlankLayoutWrapper className='layout-wrapper'>
      <Box className='app-content' sx={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>

      <section className="bg-white">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav className="flex-wrap lg:flex items-center py-1 md:py-5 xl:relative z-10">
          <div className="flex items-center justify-between">
          <img src="/images/logos/pcf.png" className='h-16 p-1 md:h-20' alt="" />
          <div className='flex items-end justify-end lg:hidden gap-4'>
            <a
              style={{ backgroundColor: '#184291' }}
              className='p-2 px-4 text-white font-bold rounded cursor-pointer text-xs'
              onClick={() => router.push('/login')}
            >
              Login
            </a>
            <a
              className='bg-red-500 text-white p-2 px-4 font-bold rounded cursor-pointer text-xs'
              onClick={() => router.push('/register')}
            >
              Join Us
            </a>
            <button
              className="lg:hidden w-10 h-10 ml-auto flex transition items-center justify-center nav-button border bg-black border-blue-700 rounded-md"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i class="bi bi-list" ></i>
            </button>
          </div>
          </div>

          <ul className={`lg:flex flex-col lg:flex-row pt-5 sm:pt-10 md:py-0 lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16 ${navbarOpen ? 'flex' : 'hidden'}`}>
            <li className="font-semibold nav-link-active text-lg transition ease-in-out duration-300 mb-5 lg:mb-0">
            <p className={`${isActive('/')} cursor-pointer`} onClick={() => router.push('/')}>Home</p>
            </li>
            <li className="font-semibold text-gray-500 text-lg nav-link transition ease-in-out duration-300 mb-5 lg:mb-0">
            <p className={`${isActive('/gallery')} cursor-pointer`} onClick={() => router.push('/gallery')}>Events</p>
            </li>
            <li className="font-semibold text-gray-500 text-lg nav-link transition ease-in-out duration-300 mb-5 lg:mb-0">
            <p className={`${isActive('/about-us')} cursor-pointer`} onClick={() => router.push('/about-us')}>About Us</p>
            </li>
            <li className="font-semibold text-gray-500 text-lg nav-link transition ease-in-out duration-300 mb-5 lg:mb-0">
            <p className={`${isActive('/contact-us')} cursor-pointer`} onClick={() => router.push('/contact-us')}>Contact Us</p>
            </li>
          </ul>
          <div className='hidden lg:flex gap-4'>
            <a
              style={{ backgroundColor: '#184291' }}
              className='p-2 px-4 text-white font-bold rounded cursor-pointer text-xs'
              onClick={() => router.push('/login')}
            >
              Login
            </a>
            <a
              className='bg-red-500 text-white p-2 px-4 font-bold rounded cursor-pointer text-xs'
              onClick={() => router.push('/register')}
            >
              Join Us
            </a>
          </div>
        </nav>
      </div>
    </section>
      
        {children}

        <footer className="bg-blue pb-10 pt-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between">
          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <div className="flex justify-center lg:justify-start mb-5">
            <img src="/images/logos/pcf.png" className='h-10 md:h-20' alt="" />
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-5">
              <a href=""
                className="px-3 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-blue-800 hover:text-white transition ease-in-out duration-500">
                <i class="bi bi-facebook"></i>
              </a>
              <a href=""
                className="px-3 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-blue-800 hover:text-white transition ease-in-out duration-500">
                   <i class="bi bi-instagram"></i>              
                </a>
              <a href=""
                className="px-3 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-blue-800 hover:text-white transition ease-in-out duration-500">
                <i class="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <h4 className="font-semibold text-gray-900 md:text-xl mb-6">Links</h4>
            
            <a href="tel:+971508541015" className="block font-light text-gray-400 text-xs mb-3 hover:text-gray-800 transition ease-in-out duration-300">
              Home
            </a>

            <a href="tel:+971508541015" className="block font-light text-gray-400 text-xs mb-3 hover:text-gray-800 transition ease-in-out duration-300">
              Events 
            </a>

            <a href="tel:+971508541015" className="block font-light text-gray-400 text-xs mb-3 hover:text-gray-800 transition ease-in-out duration-300">
              About Us
            </a>

            <a href="tel:+971508541015" className="block font-light text-gray-400 text-xs mb-3 hover:text-gray-800 transition ease-in-out duration-300">
              Contact Us
            </a>
          </div>

          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <h4 className="font-semibold text-gray-900 md:text-xl mb-6">Contact</h4>
            
            <a href="tel:+971502144469" className="block font-light text-gray-400 text-xs mb-3 hover:text-gray-800 transition ease-in-out duration-300">
              050 214 4469
            </a> 
            <a href="tel:+971502144469" className="block font-light text-gray-400 text-xs mb-3 hover:text-gray-800 transition ease-in-out duration-300">
              050 214 4469
            </a>
            
          </div>

          <div className="text-center lg:text-left">
            <h4 className="font-semibold text-gray-900 md:text-xl mb-6">Email</h4>
            <a href="mailto:info@pcf.ae" className="block font-light text-gray-400 text-xs mb-3 hover:text-gray-800 transition ease-in-out duration-300">
              info@pcf.ae
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500">
          Copyright © 2024 peoples culture forum. All rights reserved.
        </p>
        <p className="text-center text-xs text-gray-500 mt-1">
          Made by <a href="https://maxhomeproperty.com" target="_blank" rel="noopener" className="hover:underline">arshadvk7560@gmail.com</a>
        </p>
      </div>
    </footer>
      </Box>
    </BlankLayoutWrapper>
  )
}

export default UserLayout
