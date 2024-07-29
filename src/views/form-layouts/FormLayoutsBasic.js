// ** React Imports
import { ChangeEvent, MouseEvent, useState } from 'react'

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

const FormLayoutsBasic = () => {
  // ** States
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })
 
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [number , setNumber] = useState("")
  const [emirates, setEmirates] = useState("")


  const handleChange = (prop) => (event) => {
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
    <Card>
      <CardHeader title='Admin Register' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label='Name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type='email'
                label='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Enter Your Number'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type='text'
                label='Number'
                value={number}
                onChange={(e)=>setNumber(e.target.value)}
                placeholder='Enter Your Number'
              />
            </Grid>

            <Grid item xs={12} md={6} >
                <FormControl fullWidth>
                  <InputLabel id='form-layouts-separator-select-label'>Emirates</InputLabel>
                  <Select
                    label='Emirates'
                    value={emirates}
                    onChange={handleEmiratesChange}
                    id='form-layouts-separator-select'
                    labelId='form-layouts-separator-select-label'
                  >
                    <MenuItem value='Abu Dhabi'>Abu Dhabi</MenuItem>
                    <MenuItem value='Dubai'>Dubai</MenuItem>
                    <MenuItem value='Sharjah'>Sharjah</MenuItem>
                    <MenuItem value='Ajman'>Ajman</MenuItem>
                    <MenuItem value='Umm Al Quwain'>Umm Al Quwain</MenuItem>
                    <MenuItem value='Ras Al Khaimah'>Ras Al Khaimah</MenuItem>
                    <MenuItem value='Fujairah'>Fujairah</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-basic-password'>Password</InputLabel>
                <OutlinedInput
                  label='Password'
                  value={values.password}
                  id='form-layouts-basic-password'
                  onChange={handleChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  aria-describedby='form-layouts-basic-password-helper'
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        aria-label='toggle password visibility'
                      >
                        {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
               
              </FormControl>
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
                  Register
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsBasic
