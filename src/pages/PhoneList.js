import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import Results from 'src/components/phone/Results';

const PhoneList = () => (
  <>
    <Helmet>
      <title>Phone List</title>
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

export default PhoneList;
