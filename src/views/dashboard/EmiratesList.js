// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiDivider from '@mui/material/Divider'
import { useEffect, useState } from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'

// Styled Divider component
const Divider = styled(MuiDivider)(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
    margin: theme.spacing(0, 5),
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const EmiratesList = () => {
  const [emiratesData, setEmiratesData] = useState([])
  const [tokenData, setTokenData] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('admin') ?? localStorage.getItem('super') ?? 'null'

    console.log(token)
    if (token && token !== 'null') {
      try {
        const decodedToken = jwt.decode(token)
        console.log(decodedToken)

        setTokenData(decodedToken)
      } catch (error) {
        console.error('Invalid token', error)
      }
    }

    axios
      .get('/api/dashboard')
      .then(res => {
        if (decodedToken?.emirates === 'Abu Dhabi') {
          const data1 = [
            {
              logoWidth: 28,
              logoHeight: 29,
              amount: res.data.find(item => item._id === 'Abu Dhabi')?.count || 0,
              title: 'Abu Dhabi',
              logo: '/images/logos/abudhabi.png'
            }
          ]
          setEmiratesData(data1)
        } else if (decodedToken?.emirates === 'Dubai') {
          const data1 = [
            {
              logoWidth: 38,
              logoHeight: 38,
              amount: res.data.find(item => item._id === 'Dubai')?.count || 0,
              title: 'Dubai',
              logo: '/images/logos/dubai.png'
            }
          ]
          setEmiratesData(data1)
        } else if (decodedToken?.emirates === 'Sharjah') {
          const data1 = [
            {
              logoWidth: 20,
              logoHeight: 28,
              amount: res.data.find(item => item._id === 'Sharjah')?.count || 0,
              title: 'Sharjah',
              logo: '/images/logos/sharjah.png'
            },
          ]
          setEmiratesData(data1)
        } else if (decodedToken?.emirates === 'Fujairah') {
          const data1 = [
            {
              logoWidth: 30,
              logoHeight: 30,
              amount: res.data.find(item => item._id === 'Fujairah')?.count || 0,
              title: 'Fujairah',
              logo: '/images/logos/fujairah.png'
            }
          ]
          setEmiratesData(data1)
        } else if (decodedToken?.emirates === 'Ajman') {
          const data1 = [
            {
              logoWidth: 29,
              logoHeight: 30,
              amount: res.data.find(item => item._id === 'Ajman')?.count || 0,
              title: 'Ajman',
              logo: '/images/logos/ajman.png'
            }
          ]
          setEmiratesData(data1)
        } else if (decodedToken?.emirates === 'Umm Al Quwain') {
          const data1 = [
            {
              logoWidth: 34,
              logoHeight: 34,
              amount: res.data.find(item => item._id === 'Umm Al Quwain')?.count || 0,
              title: 'Umm Al Quwain',
              logo: '/images/logos/umm_al_quwain.svg'
            },
          ]
          setEmiratesData(data1)
        } else if (decodedToken?.emirates === 'Ras Al Khaimah') {
          const data1 = [
            {
              logoWidth: 30,
              logoHeight: 30,
              amount: res.data.find(item => item._id === 'Ras Al Khaimah')?.count || 0,
              title: 'Ras Al Khaimah',
              logo: '/images/logos/ras_al_khaimah.png'
            }
          ]
          setEmiratesData(data1)
        } else if (decodedToken?.role !== "A"){
          const data1 = [
            {
              logoWidth: 28,
              logoHeight: 29,
              amount: res.data.find(item => item._id === 'Abu Dhabi')?.count || 0,
              title: 'Abu Dhabi',
              logo: '/images/logos/abudhabi.png'
            },
            {
              logoWidth: 38,
              logoHeight: 38,
              amount: res.data.find(item => item._id === 'Dubai')?.count || 0,
              title: 'Dubai',
              logo: '/images/logos/dubai.png'
            },
            {
              logoWidth: 20,
              logoHeight: 28,
              amount: res.data.find(item => item._id === 'Sharjah')?.count || 0,
              title: 'Sharjah',
              logo: '/images/logos/sharjah.png'
            },
            {
              logoWidth: 30,
              logoHeight: 30,
              amount: res.data.find(item => item._id === 'Fujairah')?.count || 0,
              title: 'Fujairah',
              logo: '/images/logos/fujairah.png'
            },
            {
              logoWidth: 29,
              logoHeight: 30,
              amount: res.data.find(item => item._id === 'Ajman')?.count || 0,
              title: 'Ajman',
              logo: '/images/logos/ajman.png'
            },
            {
              logoWidth: 34,
              logoHeight: 34,
              amount: res.data.find(item => item._id === 'Umm Al Quwain')?.count || 0,
              title: 'Umm Al Quwain',
              logo: '/images/logos/umm_al_quwain.svg'
            },
            {
              logoWidth: 30,
              logoHeight: 30,
              amount: res.data.find(item => item._id === 'Ras Al Khaimah')?.count || 0,
              title: 'Ras Al Khaimah',
              logo: '/images/logos/ras_al_khaimah.png'
            }
          ]

          setEmiratesData(data1)
          console.log(res.data)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'] }}>
      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='Emirates'
          sx={{ pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          titleTypographyProps={{
            variant: 'h6',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
          {emiratesData.map((item, index) => {
            return (
              <Box
                key={item.title}
                sx={{ display: 'flex', alignItems: 'center', mb: index !== emiratesData.length - 1 ? 6 : 0 }}
              >
                <Box sx={{ minWidth: 38, display: 'flex', justifyContent: 'center' }}>
                  <img src={item.logo} alt={item.title} width={item.logoWidth} height={item.logoHeight} />
                </Box>
                <Box
                  sx={{
                    ml: 4,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.title}</Typography>
                  </Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'success.main' }}>
                    {item.amount}
                  </Typography>
                </Box>
                <Divider />
              </Box>
            )
          })}
        </CardContent>
      </Box>
    </Card>
  )
}

export default EmiratesList
