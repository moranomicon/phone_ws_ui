import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import Results from 'src/components/phone_request/Results';

const PhoneReview = () => (
  <>
    <Helmet>
      <title>Phone Repair</title>
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
          <Results />
        </Box>
      </Container>
    </Box>
  </>
);

export default PhoneReview;
