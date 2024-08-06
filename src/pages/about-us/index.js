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
            <h1 className='text-black font-bold mb-2' style={{  fontFamily: "Manjari" , textTransform: "uppercase", }}>പി.സി.എഫ് (പീപ്പിൾസ് കൾച്ചറൽ ഫോറം)</h1>

            <p className='text-sm font-extrabold text-black w-80' style={{ fontFamily: "Manjari" }}>
            അബ്ദുൾ നാസർ മഅ്ദനി അധ്യക്ഷനായ പീപ്പിൾസ് ഡെമോക്രാറ്റിക് പാർട്ടിയുടെ (പിഡിപി) പ്രവാസി സംഘടനയാണ് പിസിഎഫ് .അബ്ദുൾ നാസർ മഅ്ദനി മുന്നോട്ടുവെച്ച 'മർദ്ദിതപക്ഷ രാഷ്ട്രീയ'ത്തിന്റെ ചുവട് പിടിച്ച്; പ്രവാസി സമൂഹം നേരിടുന്ന വിവിധങ്ങളായ പ്രശ്നങ്ങൾ ഏറ്റെടുത്തു കൊണ്ടാണ് യുഎഇയിൽ ഉൾപ്പടെ മറ്റെല്ലാ ജിസിസി നാടുകളിലും പി.സി.എഫ്. പ്രവർത്തിക്കുന്നത്
            </p>
          </div>
        </div>



        <div className='flex items-center justify-center p-8'>
          <div>

            <p className='text-xs font-bold mb-3' style={{ textTransform: "uppercase", }}> Our Vision  </p>

            <p className='text-sm font-extrabold text-black  w-80' style={{ fontFamily: "Manjari" }}>
            അബ്ദുൾ നാസർ മഅ്ദനി മുന്നോട്ടുവെച്ച 'മർദ്ദിതപക്ഷ രാഷ്ട്രീയ'ത്തിന്റെ ചുവട് പിടിച്ച്; പ്രവാസി സമൂഹം നേരിടുന്ന വിവിധങ്ങളായ പ്രശ്നങ്ങൾ ഏറ്റെടുത്തു കൊണ്ടാണ് യുഎഇയിൽ ഉൾപ്പടെ മറ്റെല്ലാ ജിസിസി നാടുകളിലും പി.സി.എഫ്. പ്രവർത്തിക്കുന്നത്
            </p>

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

            <p className='text-sm font-extrabold text-black mb-2 w-80' style={{ fontFamily: "Manjari" }}>പ്രവാസികളായ പിഡിപി പ്രവർത്തകരുടെയും ചെയർമാൻ അബ്ദുൾനാസർ മഅദനിയെ സ്നേഹിക്കുന്ന സേവന മനോഭാവമുള്ള നിരവധി അഭ്യുതകാംശികളുടെയും കൂട്ടായ പരിശ്രമത്തിന്റെ ഫലമായി യു.എ.ഇ അടക്കമുള്ള ജിസിസി രാജ്യങ്ങളിലെ സജീവ സംഘടനകളിലൊന്നായി നിലവിൽ പി.സി.എഫ് അഥവാ പീപ്പിൾസ് കൾച്ചറൽ ഫോറം പ്രവർത്തിച്ചുകൊണ്ടിരിക്കുന്നു. </p>
           

          </div>
        </div>
      </div>
    </div>
  )
}

HomePage.getLayout = (page) => <UserLayout>{page}</UserLayout>

export default HomePage
