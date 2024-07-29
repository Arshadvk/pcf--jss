// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/user/Table'
import axios from 'axios'
import { useEffect, useState } from 'react'





const UserTable = () => {
  const [data, setData] = useState([])

  useEffect(() => {

    const token = localStorage.getItem("admin") ?? localStorage.getItem("super") ?? "null";

    if (token && token !== "null" && localStorage.getItem("admin") ) {
      axios.get(`/api/findalluser/${token}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    }else if (token && token !== "null" && localStorage.getItem("super") ) {
      axios.get(`/api/findalluser`)
      .then((res) => {
        setData(res.data)
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
            <Link href=''>
              User List
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <Table data={data} type='userData' />
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>

  )
}

export default UserTable
