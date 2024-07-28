// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'

const rows = [
    {
      age: 27,
      status: 'current',
      date: '09/27/2018',
      name: 'Sally Quinn',
      salary: '$19586.23',
      email: 'eebsworth2m@sbwire.com',
      designation: 'Human Resources Assistant'
    },
    {
      age: 61,
      date: '09/23/2016',
      salary: '$23896.35',
      status: 'professional',
      name: 'Margaret Bowers',
      email: 'kocrevy0@thetimes.co.uk',
      designation: 'Nuclear Power Engineer'
    },
    {
      age: 59,
      date: '10/15/2017',
      name: 'Minnie Roy',
      status: 'rejected',
      salary: '$18991.67',
      email: 'ediehn6@163.com',
      designation: 'Environmental Specialist'
    },
    {
      age: 30,
      date: '06/12/2018',
      status: 'resigned',
      salary: '$19252.12',
      name: 'Ralph Leonard',
      email: 'dfalloona@ifeng.com',
      designation: 'Sales Representative'
    },
    {
      age: 66,
      status: 'applied',
      date: '03/24/2018',
      salary: '$13076.28',
      name: 'Annie Martin',
      designation: 'Operator',
      email: 'sganderton2@tuttocitta.it'
    },
    {
      age: 33,
      date: '08/25/2017',
      salary: '$10909.52',
      name: 'Adeline Day',
      status: 'professional',
      email: 'hnisius4@gnu.org',
      designation: 'Senior Cost Accountant'
    },
    {
      age: 61,
      status: 'current',
      date: '06/01/2017',
      salary: '$17803.80',
      name: 'Lora Jackson',
      designation: 'Geologist',
      email: 'ghoneywood5@narod.ru'
    },
    {
      age: 22,
      date: '12/03/2017',
      salary: '$12336.17',
      name: 'Rodney Sharp',
      status: 'professional',
      designation: 'Cost Accountant',
      email: 'dcrossman3@google.co.jp'
    }
  ]

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Table rows={rows} type={"user"}/>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard