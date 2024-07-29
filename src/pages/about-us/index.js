// ** Layout Import
import UserLayout from 'src/@core/layouts/UserLayout'

const HomePage = () => {

  return (
    <div >
      <div className='grid grid-col md:grid-cols-2'>

        <div className='p-10 '>
          <img src="/images/events/2.jpg" className='rounded-3xl' alt="" srcSet="" />
        </div>

        <div className='flex items-center justify-center p-8'>
          <div>

            <p className='text-xs font-bold mb-3' style={{ textTransform: "uppercase", }}> Who we are ? </p>
            <h1 className='text-black font-bold mb-2' style={{ textTransform: "uppercase", }}>PCF (People's Cultural Forum)</h1>

            <p className='text-sm font-extrabold text-black' style={{ fontFamily: "Manjari" }}>
              The People's Cultural Forum (PCF) is the diaspora wing of the People's Democratic Party (PDP), led by Abdul Nasser Madani. We are a unified organization operating across the GCC countries, including the UAE, dedicated to addressing the diverse issues faced by the expatriate community. Our formation stemmed from the principles of 'oppressed party politics' championed by Abdul Nasser Madani. Post-2000, our independent chapters in the GCC countries merged to form the PCF, which has since been recognized as the official diaspora organization of the PDP.

              Our members consist of expatriate PDP activists and service-minded citizens who are deeply committed to the vision and leadership of Chairman Abdul Nasser Madani. Together, we strive to make a meaningful impact on the lives of our community members, advocating for their rights and welfare.
            </p>
          </div>
        </div>



        <div className='flex items-center justify-center p-8'>
          <div>

            <p className='text-xs font-bold mb-3' style={{ textTransform: "uppercase", }}> Our Vision  </p>
            <h1 className='text-black font-bold mb-2' style={{ textTransform: "uppercase", }}>PCF (People's Cultural Forum)</h1>

            <p className='text-sm font-extrabold text-black' style={{ fontFamily: "Manjari" }}>
              Our vision is to create a supportive and empowered expatriate community in the GCC countries, inspired by the principles of justice and equality promoted by Abdul Nasser Madani. We aim to:

              Through our collective efforts, we aspire to build a vibrant and resilient expatriate community that upholds the ideals of justice, equality, and cultural unity.
            </p>
            <p className='text-sm font-extrabold text-black' style={{ fontFamily: "Manjari" }}>   1) Address Expatriate Challenges: Actively engage with and resolve the various problems faced by the expatriate community, ensuring their voices are heard and their needs met.</p>

            <p className='text-sm font-extrabold text-black' style={{ fontFamily: "Manjari" }}> 2) Promote Cultural Unity: Foster a sense of solidarity and cultural pride among expatriates, celebrating our shared heritage and values. </p>

          </div>
        </div>

        <div className='p-10'>
          <img src="/images/events/3.jpg" className='rounded-3xl' alt="" srcSet="" />
        </div>


        <div className='p-10 '>
          <img src="/images/events/4.jpg" className='rounded-3xl' alt="" srcSet="" />
        </div>

        <div className='flex items-center justify-center p-8'>
          <div>

            <p className='text-sm font-extrabold text-black mb-2' style={{ fontFamily: "Manjari" }}>  3) Advocate for Rights: Stand up for the rights and welfare of expatriates, working towards equitable treatment and opportunities for all.</p>
            <p className='text-sm font-extrabold text-black mb-2' style={{ fontFamily: "Manjari" }}>  4) Community Support: Provide support and resources to expatriates, enhancing their quality of life and helping them navigate the challenges of living abroad.</p>
            <p className='text-sm font-extrabold text-black mb-2' style={{ fontFamily: "Manjari" }}>  5) Sustain Organizational Growth: Continue to expand our reach and effectiveness, strengthening our presence and impact across the GCC countries.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

HomePage.getLayout = (page) => <UserLayout>{page}</UserLayout>

export default HomePage
