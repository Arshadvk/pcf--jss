// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

// ** Custom Components Imports

const ImgStyled = styled('img')(({}) => ({
  width: '3.1cm',
  height: '3.1cm',
  marginTop: '10px',
  marginRight: '0.3cm',
  border: '5px solid white',
  borderRadius: '17px' ,
  crossOrigin: 'anonymous' // Added crossOrigin attribute

}))

const IdCard = styled('div')(() => ({
  height: '9.6cm',
  width: '5.8cm'
}))

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { useEffect, useState } from 'react'

import html2canvas from 'html2canvas'
import axios from 'axios'
import { useRouter } from 'next/router'

// ** Demo Components Imports

const UserRequests = () => {
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = useState(null)
  const [imgSrc , setImg] = useState('/images/avatars/img1.jpg')

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/userid/${id}`)
        .then(response => {
          setData(response.data)
          setImg("https://maxhomeproperty.com/assets/team/maria.webp")
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    }
    
  }, [id])


  const saveAsImage = () => {
    const element = document.getElementById('cardContainer')

    if (element) {
      html2canvas(element, { useCORS: true }).then(canvas => { // Added useCORS option
        const imgData = canvas.toDataURL('image/jpeg')
        const link = document.createElement('a')
        link.download = 'cardImage.jpeg'
        link.href = imgData
        link.click()
      })
    } else {
      console.error("Element with id 'cardContainer' not found.")
    }
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12} lg={6} padding={10}>
          <div id='cardContainer' style={{ height: '9.6cm', width: '5.7cm' }}>
            <IdCard
              style={{
                backgroundImage: "url('/images/cards/card.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: '0.3cm'
              }}
            >
              <div className='flex items-center justify-center'>
                <img src='/images/logos/pcf.png' className='h-14' />
              </div>

              <p className='text-center text-xs text-white font-semibold mt-1'>PEOPLES CULTURAL FORUM</p>
              <p className='text-center text-xs text-white font-semibold '>( P C F )</p>
              <p className='text-center text-xs text-white font-semibold'>UAE National Committee</p>
              <Grid item xs={12} alignItems={'end'} justifyItems={'end'} textAlign={'center'} paddingRight={10}>
                <Grid className='flex items-end justify-end'>
                  <ImgStyled className='' src={imgSrc} alt='Profile Pic' />
                </Grid>
              </Grid>

                <Grid >
                  <Typography variant='h6' style={{ fontWeight: 'bold', color: 'black', fontSize: '10px' , textAlign: "center" }}>
                    {data?.name}
                  </Typography>
                  <Typography variant='h6' style={{ color: 'black', fontSize: '10px' ,  textAlign: "center"  }}>
                    {data?.whatsapp}
                  </Typography> 
                  <Typography variant='h6' style={{ fontWeight: 'bold', color: '#ECC36E', fontSize: '10px' ,  textAlign: "center"  }}>
                    M.NO :   AUH-605
                  </Typography>
                  
                 <Typography variant='h6' style={{ color: '#', fontSize: '10px' ,  textAlign: "center"  }}>
                    {/* Mandalam :  {data?.address?.panjayath} */}
                    Mandalam : Pattambi
                  </Typography> 

                 <Typography variant='h6' style={{ color: '#', fontSize: '10px' ,  textAlign: "center"  }}>
                    {/* District :   {data?.address?.district} */}
                    District :  Palakkad
                  </Typography> 
                </Grid>

                <div className='flex justify-between items-end'>
                  <p className='text-[8px] pt-2 pl-3'>
                    Issued : 30/03/2023 
                  </p>
                  <p className='text-[8px] pt-2 pr-3'>
                    Expiry : 30/03/2023 
                  </p>
                </div>

            </IdCard>
          </div>
          <Button variant='contained' style={{ margin: '15px' }} onClick={saveAsImage}>
            Save as Image
          </Button>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default UserRequests
