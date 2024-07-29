// ** React Imports
import { ReactNode } from 'react'

// ** Layout Import
import UserLayout from 'src/@core/layouts/UserLayout.js'

const HomePage = () => {

  return (
    <div>
     
     <div
  className="grid grid-cols-2 h-[20vh] md:h-[60vh]"
  style={{
    backgroundImage: `url(/images/events/2.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
          <div className='flex items-center justify-center'>
              <h4 className='text-sm md:text-5xl font-extrabold text-white' style={{textTransform:"uppercase" , fontFamily:"Chilanka"}}>
             " അവർണ്ണന് അധികാരം <br /> 
               പീഡിതന് മോചനം "
              </h4>
          </div>
          <div className='flex items-end justify-end'>
          {/* <img src="/images/home/home.png" className='h-80 mt-20' alt="" /> */}
          
          </div>
      </div>
     
    </div>
  )
} 

HomePage.getLayout = (page) => <UserLayout>{page}</UserLayout>

export default HomePage
