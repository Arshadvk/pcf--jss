// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useEffect, useState } from 'react'
import jwt from "jsonwebtoken";

// Styled component for the triangle shaped background image


// Styled component for the trophy image
 

const Trophy = () => {
  // ** Hook
  
  const [tokenData, setTokenData] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("admin") ?? localStorage.getItem("super") ?? "null";

    if (token && token !== "null") {
      try {
        const decodedToken = jwt.decode(token);
        setTokenData(decodedToken);
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography >As Salaam Alaikum {tokenData?.name} ! </Typography>
      </CardContent>
    </Card>
  )
}

export default Trophy
