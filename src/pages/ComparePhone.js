import { React, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import PhoneDetails from 'src/components/phone/PhoneDetails';
import instance from 'src/connection';
import { useParams } from 'react-router-dom';

const getPhoneDetails = (id) => {
  const phoneData = instance
    .get(`/phone-details/?phone_id=${id}`)
    .then((res) => res.data[0]);
  return phoneData;
};
const ComparePhone = () => {
  const { id1, id2 } = useParams();

  const [firstPhone, setFirstPhone] = useState({});
  const [secondPhone, setSecondPhone] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPhoneDetails(id1), getPhoneDetails(id2)]).then((values) => {
      setFirstPhone(values[0]);
      setSecondPhone(values[1]);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <span>loading...</span>;

  return (
    <>
      <Helmet>
        <title>Compare Phones</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3} alignItems="center">
            <Grid item maxWidth="50%">
              <Box sx={{ pt: 3 }}>
                <PhoneDetails phone={firstPhone} />
              </Box>
            </Grid>
            <Grid item maxWidth="50%">
              <Box sx={{ pt: 3 }}>
                <PhoneDetails phone={secondPhone} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ComparePhone;
