// ** Layout Import
import UserLayout from 'src/@core/layouts/UserLayout'
// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'


// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import axios from 'axios'


const HomePage = () => {
 // ** States
 const [values, setValues] = useState({
  password: '',
  showPassword: false
})

const [name , setName] = useState("")
const [email , setEmail] = useState("")
const [number , setNumber] = useState("")
const [emirates, setEmirates] = useState(null)


const handleChange = (prop ) => (event) => {
  setValues({ ...values, [prop]: event.target.value })
}
const handleEmiratesChange = (event) => {
  setEmirates(event.target.value);
}
const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword })
}

const handleMouseDownPassword = (event) => {
  event.preventDefault()
}

const onSubmit = async  (event) => {
  event.preventDefault()
  const admin = {
    name , 
    email ,
    number ,
    emirates , 
    password : values.password
  }
  console.log(admin)
  axios.post('/api/post/create-admin' , admin, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
      alert(res.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

}
  return (
    <div className='flex items-center justify-center p-10'>
     
      
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={7} >
              <TextField fullWidth sx={{marginY:2}} label='Name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' />

              <TextField sx={{marginY:2}}
                fullWidth
                type='email'
                label='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
               <TextField sx={{marginY:2}}
                fullWidth
                type='number'
                label='Number'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Enter Your Number'
              />
               <TextField sx={{marginY:2}}
                fullWidth
                type='number'
                label='Number'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Enter Your Number'
              />
            </Grid>
           
  
            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Button onClick={(e) => onSubmit(e)} type='submit' variant='contained' size='large'>
                  Send Message 
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      
   
    </div>
  )
} 

HomePage.getLayout = (page) => <UserLayout>{page}</UserLayout>

export default HomePage
