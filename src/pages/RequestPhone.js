import { Helmet } from 'react-helmet';
import { Formik } from 'formik';
// import Rating from '@material-ui/lab/Rating';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import instance from 'src/connection';
import { useNavigate } from 'react-router-dom';

const RequestPhone = () => {
  const navigate = useNavigate();

  const onSubmit = (phoneName, phoneDetails) => {
    instance.post('/phone-request/', { phone_name: phoneName, phone_details: phoneDetails }).then(navigate('app/my-phone-request/'));
  };

  return (
    <>
      <Helmet>
        <title>Request Phone</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: '$ffffff',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              phone_name: '',
              phone_details: ''
            }}
            onSubmit={(values) => {
              onSubmit(values.phone_name, values.phone_details);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Request Phone
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.phoneName && errors.phoneName)}
                  fullWidth
                  helperText={touched.phoneName && errors.phoneName}
                  label="Phone Name"
                  margin="normal"
                  name="phone_name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.phoneName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.details && errors.details)}
                  fullWidth
                  helperText={touched.details && errors.details}
                  label="Additional Details"
                  margin="normal"
                  name="phone_details"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="textarea"
                  value={values.review}
                  variant="outlined"
                  multiline
                  autoComplete="off"
                  rows={4}
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Submit Request
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default RequestPhone;
