// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Greetings from 'src/views/dashboard/Greetings'
import EmiratesList from 'src/views/dashboard/EmiratesList'

const Dashboard = () => {
  
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Greetings />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <EmiratesList />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
