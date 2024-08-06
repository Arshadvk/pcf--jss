// ** Layout Import
import UserLayout from 'src/@core/layouts/UserLayout'
// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import axios from 'axios'


const HomePage = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    const messageData = {
      name,
      email,
      number,
      message
    }
    console.log(messageData)
    axios.post('/api/post/', messageData, {
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
      <form onSubmit={onSubmit}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={7}>
            <TextField fullWidth sx={{ marginY: 2 }} label='Name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />

            <TextField sx={{ marginY: 2 }}
              fullWidth
              type='email'
              label='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField sx={{ marginY: 2 }}
              fullWidth
              type='number'
              label='Number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder='Enter Your Number'
            />
            <TextField
              fullWidth
              multiline
              minRows={4}
              sx={{ marginY: 2 }}
              label='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Enter Your Message'
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
              <Button type='submit' variant='contained' size='large'>
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
