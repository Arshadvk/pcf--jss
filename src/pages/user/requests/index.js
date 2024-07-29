// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

// ** Custom Components Imports
import Table from 'src/views/user/Table'



// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import axios from 'axios'
import { useEffect, useState } from 'react'

// ** Demo Components Imports

const UserRequests = () => {

  const [data , setData] = useState()


  useEffect(() => {
    const token = localStorage.getItem("admin") ?? localStorage.getItem("super") ?? "null";
    if (token && token !== "null" && localStorage.getItem("admin") ) {
    axios.get(`/api/find-requests/${token}`)
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }else if (token && token !== "null" && localStorage.getItem("super") ) {
      axios.get(`/api/find-requests`)
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }, [])

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h5'>
              User Requests
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <Table data={data ?? []} type='request' />
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>

  )
}

export default UserRequests
