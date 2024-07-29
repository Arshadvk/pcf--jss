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
  borderRadius: '17px'
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

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/userid/${id}`)
        .then(response => {
          setData(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    }
  }, [id])

  const [imgSrc] = useState('/images/avatars/img1.jpg')

  const saveAsImage = () => {
    const element = document.getElementById('cardContainer')

    if (element) {
      html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png')
        const link = document.createElement('a')
        link.download = 'cardImage.png'
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

                <Grid marginLeft={4} marginTop={1}>
                  <Typography variant='h6' style={{ fontWeight: 'bold', color: 'black', fontSize: '10px' , textAlign: "center" }}>
                    {data?.name}
                  </Typography>
                  <Typography variant='h6' style={{ fontWeight: 'bold', color: 'black', fontSize: '10px' ,  textAlign: "center"  }}>
                    {data?.whatsapp}
                  </Typography>
                </Grid>

              <Grid container spacing={3}>
                <Grid item xs={6} paddingLeft={10}></Grid>
                <Grid xs={6}>
                  <Grid container direction='column' paddingLeft={8} paddingTop={9}>
                    <Typography fontSize={20} style={{ color: 'black', fontSize: '8px' }}>
                      AUH.701
                    </Typography>
                    <Typography fontSize={17} style={{ color: 'black', fontSize: '8px' }}>
                      GURUVAYOOR
                    </Typography>

                    <Typography fontSize={17} style={{ color: 'black', fontSize: '8px' }}>
                      {data?.address?.district}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
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
