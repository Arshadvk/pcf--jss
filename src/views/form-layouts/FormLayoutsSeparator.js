// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import axios from 'axios'
import Swal from 'sweetalert2'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})


const FormLayoutsSeparator = () => {
  // ** States
  const [date, setDate] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [image, setImage] = useState("")

  const [blood, setBlood] = useState("")
  const [emirates, setEmirates] = useState("")
  const [profession, setProfession] = useState("")
  const [zone, setZone] = useState("")


  const [houseName, setHouseName] = useState("")
  const [district, setDistrict] = useState("")
  const [panjayath, setPanjayath] = useState("")
  const [pin, setPin] = useState("")

  const handleEmiratesChange = (event) => {
    setEmirates(event.target.value);
  };

  const handleBloodChange = (event) => {
    setBlood(event.target.value );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      number,
      dob: date ,
      whatsapp,
      blood,
      emirates,
      profession,
      zone,
      address: {
        houseName,
        district,
        panjayath,
        pin
      }
    }
    try {
      axios.post('/api/post/createuser', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'File uploaded successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }).catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: `Error uploading file: ${error.message}`,
          icon: 'error',
          confirmButtonText: 'OK'
        });
        console.error('Error uploading file:', error);
      });
    } catch (error) {

      Swal.fire({
        title: 'Error!',
        text: `Error uploading file: ${error}`,
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.error('Error uploading file:', error);

    }

  };

  return (
    <Card>
      <CardHeader title='Application for Membership' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Personal Info
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Name' value={name} onChange={e => setName(e.currentTarget.value)} placeholder='Enter Your Name' required />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Emirates</InputLabel>
                <Select
                  label='Emirates'
                  value={blood}
                  onChange={handleBloodChange}
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='A+'>A+</MenuItem>
                  <MenuItem value='A-'>A-</MenuItem>
                  <MenuItem value='AB+'>AB+</MenuItem>
                  <MenuItem value='AB-'>AB-</MenuItem>
                  <MenuItem value='B+'>B+</MenuItem>
                  <MenuItem value='B-'>B-</MenuItem>
                  <MenuItem value='O+'>O+</MenuItem>
                  <MenuItem value='O-'>O-</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='email' value={email} onChange={e => setEmail(e.currentTarget.value)} label='Email' required placeholder='example@gmail.com' />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='tel' value={number} onChange={e => setNumber(e.currentTarget.value)} label='Tel/Mob' placeholder='Enter your Number' />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='tel' value={whatsapp} onChange={e => setWhatsapp(e.currentTarget.value)} label='WhatsApp No' placeholder='Enter Your WhatsApp no' />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='file' label='Photo' value={image} onChange={e => setImage(e.currentTarget.value)} />
            </Grid>


            <Grid item xs={12} sm={6}>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                id='form-layouts-separator-date'
                onChange={(date) => setDate(date)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='' label='WhatsApp No' placeholder='carterleonard@gmail.com' />
            </Grid><Grid item xs={12} sm={6}>
              <TextField fullWidth type='Email' label='Qualification' placeholder='carterleonard@gmail.com' />
            </Grid>

            <Grid item xs={12} sm={6}>
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

            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='text' value={profession} onChange={e => setProfession(e.target.value)} label='Profession' />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='text' value={zone} onChange={e => setZone(e.target.value)} label='Zone/Area' />
            </Grid>



            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Address in home country
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='House Name' value={houseName} onChange={e => setHouseName(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='District' value={district} onChange={e => setDistrict(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Panjayath' value={panjayath} onChange={e => setPanjayath(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='PIN' value={pin} onChange={e => setPin(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Legislative assembly' placeholder='Carter' />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Before in PDP' placeholder='Carter' />
            </Grid>

          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit'  sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
