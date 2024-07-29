// ** MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// ** Custom Components Imports

const ImgStyled = styled('img')(({ theme }) => ({
  width: 180,
  height: 210,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}));

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';
import { useEffect, useState } from 'react';

import axios from 'axios';
import { useRouter } from 'next/router';

const UserRequests = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const router = useRouter();
  const { id } = router.query;
  const [imgSrc] = useState('/images/avatars/img1.jpg');

  useEffect(() => {
    if (!initialData && id) {
      axios.get(`/api/userid/${id}`)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id, initialData]);

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid className='md:flex' item xs={12}>
          <Grid className='mx-5 mb-5 md:hidden' xs={6}>
            <ImgStyled src={imgSrc} alt='Profile Pic' />
          </Grid>

          <Grid className='mx-5'>
            <Typography variant='subtitle2'>
              Name : {data?.name}
            </Typography>
            <Typography variant='subtitle2'>
              Email : {data?.email}
            </Typography>
            <Typography variant='subtitle2'>
              Emirates : {data?.emirates}
            </Typography>
            <Typography variant='subtitle2'>
              Blood: : {data?.blood}
            </Typography>
            <Typography variant='subtitle2'>
              Whatsapp : {data?.whatsapp}
            </Typography>
            <Typography variant='subtitle2'>
              Date of Birth : {data?.date_of_birth}
            </Typography>
            <Typography variant='subtitle2'>
              Profession : {data?.profession}
            </Typography>
            <Typography variant='subtitle2'>
              Zone : {data?.zone}
            </Typography>
            <Typography variant='subtitle2'>
              Address : {data?.address?.district} , {data?.address?.panjayath}
            </Typography>
            <Typography variant='subtitle2'>
              Whatsapp : {data?.whatsapp}
            </Typography>
          </Grid>
          <Grid xs={6} className='mx-5 my-10 md:my-0 hidden md:block'>
            <ImgStyled src={imgSrc} alt='Profile Pic' />
          </Grid>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  try {
    const response = await axios.get(`/api/userid/${id}`);
    return {
      props: {
        initialData: response.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        initialData: null,
      },
    };
  }
};

export default UserRequests;
