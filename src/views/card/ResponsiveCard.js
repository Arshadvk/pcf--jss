import React, { useState } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

// Custom styled image component
const ImgStyled = styled('img')(({ theme }) => ({
    width: 180,
    height: 210,
    marginRight: theme.spacing(6.25),
    borderRadius: theme.shape.borderRadius
  }));

const ResponsiveCard = () => {
  // Define a media query for small devices
  const isSmallDevice = useMediaQuery('(max-width:1000px)');

  // Set the height based on the media query
  const cardHeight = isSmallDevice ? '20rem' : '30rem';
  const [imgSrc] = useState<string>('/images/avatars/img1.jpg')

  return (
    <Card style={{
        height: "30rem",
      }} >

    <Card
      style={{
        backgroundImage: "url('/images/cards/card.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'red',
        height: cardHeight,

      }}
    >
        
      <Grid item xs={12} alignItems={'end'} justifyItems={'end'} textAlign={'end'}>
        <ImgStyled src={imgSrc} style={{ marginTop: 70, marginLeft: 450  }} alt='Profile Pic' />
        <Typography variant='h6' paddingRight={30} style={{ fontWeight: 'bold', color: "black" }}>
          Harish
        </Typography>
        <Typography variant='h6' paddingRight={20} style={{ fontWeight: 'bold', color: "black" }}>
          055 4369944
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} paddingLeft={10} paddingTop={6}>
          <Grid container direction="column" paddingLeft={10} paddingTop={6}>
            <Typography fontSize={20} style={{ color: "white" }}>
              M.NO.AUH.701
            </Typography>
            <Typography fontSize={14} style={{ color: "white" }}>
              Issue. 30/04/2023
            </Typography>
            <Typography fontSize={14} style={{ color: "white" }}>
              Expiry 30/04/2025
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column" paddingLeft={8} paddingTop={12}>
            <Typography fontSize={17} style={{ color: "white" }}>
              MANDALAM - GURUVAYOOR
            </Typography>
            <Typography fontSize={17} style={{ color: "white" }}>
              DISTRICT - THRISSUR
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
    </Card>
  );
};

export default ResponsiveCard;
