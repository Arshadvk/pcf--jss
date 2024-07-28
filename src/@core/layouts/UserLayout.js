// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import { useRouter } from 'next/router'

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

    const router = useRouter()
 
    const isActive = (path) => {
        return router.pathname === path ? 'text-black' : 'text-gray-400 hover:text-gray-900';
      }

  return (
    <BlankLayoutWrapper className='layout-wrapper'>
      <Box className='app-content' sx={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>

      <div className='p-5 bg-white'>
        <div className='flex gap-10 justify-between items-center'>
          <img src="/images/logos/pcf.png" className='h-10 md:h-20' alt="" />

          <div className='md:flex gap-16 font-bold hidden'>
            <p className={`${isActive('/')} cursor-pointer`} onClick={() => router.push('/')}>Home</p>
            <p className={`${isActive('/gallery')} cursor-pointer`} onClick={() => router.push('/gallery')}>Events</p>
            <p className={`${isActive('/about-us')} cursor-pointer`} onClick={() => router.push('/about-us')}>About Us</p>
            <p className={`${isActive('/contact-us')} cursor-pointer`} onClick={() => router.push('/contact-us')}>Contact Us</p>
          </div>

          <div className='flex gap-4'>
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
        </div>
      </div>

      
        {children}

     <footer className='h-50' style={{backgroundColor:"#0E1B4D"}}>
        <div className='grid grid-cols-3'>
          <div className='flex items-center justify-center'>
            <div className='m-3'>
              <p className='text-white m-2 font-extrabold'>Contact Us</p>
              <p className='text-white m-2 font-normal'> Abu Dhabi</p>
              <p className='text-white m-2 font-normal'>pcf@gmail.com</p>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='m-3'>
              <p className='text-white m-2'>Home</p>
              <p className='text-white m-2'>Events</p>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='m-3'>
              <p className='text-white m-2'>Home</p>
              <p className='text-white m-2'>Events</p>
            </div>
          </div>
        
        </div>

        
      </footer>
      </Box>
    </BlankLayoutWrapper>
  )
}

export default UserLayout
