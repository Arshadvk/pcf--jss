// ** Layout Import
import UserLayout from 'src/@core/layouts/UserLayout'

const HomePage = () => {

  const photo = [1,2,3, 4,5,6,7,8,9]

  return (
    <div className=' grid grid-cols md:grid-cols-3 xl:grid-cols-4'>
       {photo.map((photo)=>{
        return (
            // eslint-disable-next-line react/jsx-key
            <div>

            <div className='flex items-center justify-center pb-5'>
            <img src={`/images/events/${photo}.jpg`} className='shadow-lg rounded-xl' height={300} width={300} alt="" srcSet="" />
            </div>
            <h2 className='text-center'>
              {photo}
            </h2>
          </div>)
       })}
    

    </div>
  )
}

HomePage.getLayout = (page) => <UserLayout>{page}</UserLayout>

export default HomePage
