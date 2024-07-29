// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import AdminTable from 'src/views/admin/Table'
import { useEffect, useState } from 'react'
import axios from 'axios'

const MUITable = () => {

  const [data , setData ] = useState([])
  useEffect(()=>{
    axios.get('/api/find-all-admin')
    .then((res) => {
      setData(res.data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  },[])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
           Admin List
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <AdminTable data={data} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
