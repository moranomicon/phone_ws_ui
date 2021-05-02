import { React, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import instance from 'src/connection';
import { useParams } from 'react-router-dom';

const getPhoneDetails = (id) => {
  const phoneData = instance
    .get(`/phone-details/${id}`);
  return phoneData;
};

const PhoneDetails = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState({});

  useEffect(() => {
    getPhoneDetails(id).then((values) => {
      setPhone(values[0]);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Phone Details</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ pt: 3 }}>
            <PhoneDetails phone={phone} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PhoneDetails;
