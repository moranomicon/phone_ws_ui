/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Field, Formik } from 'formik';
import Rating from '@material-ui/lab/Rating';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  MenuItem,
  InputLabel
} from '@material-ui/core';
import instance from 'src/connection';
import { Select } from 'formik-material-ui';
import { useNavigate } from 'react-router-dom';

const LeaveReview = () => {
  const [phones, setPhones] = useState([]);
  const navigate = useNavigate();

  const getPhoneList = () => {
    instance.get('/phone/').then((res) => {
      setPhones(res.data);
    });
  };

  useEffect(() => {
    getPhoneList();
  }, []);

  const onSubmit = (phoneId, reviews, rating) => {
    instance.post('/phone-reviews/', { phone: phoneId, review: reviews, stars: rating }).then(navigate('/app/my-phone-review/'));
  };

  return (
    <>
      <Helmet>
        <title>Leave Review</title>
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
              rating: 3
            }}
            onSubmit={(values) => {
              onSubmit(values.phone, values.review, values.rating);
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
                  <Typography color="textPrimary" variant="h2">
                    Submit Review
                  </Typography>
                </Box>
                <InputLabel htmlFor="phone">Phone</InputLabel>
                <Field name="phone" label="Phone" component={Select} variant="outlined" fullWidth>
                  {/* {phones.map((m) => <MenuItem value={m.id}>{m.name}</MenuItem>)} */}
                  {phones.map((m) => {
                    console.log('test');
                    return <MenuItem value={m.id}>{m.name}</MenuItem>;
                  })}
                </Field>
                <TextField
                  error={Boolean(touched.review && errors.review)}
                  fullWidth
                  helperText={touched.review && errors.review}
                  label="Review"
                  margin="normal"
                  name="review"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.review}
                  variant="outlined"
                  multiline
                  autoComplete="off"
                  rows={4}
                />
                <InputLabel htmlFor="rating">Rating</InputLabel>
                <Field name="rating" id="rating" type="number" label="Rating">
                  {({ field: { rating }, form: { setFieldValue } }) => (
                    <div>
                      <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => {
                          setFieldValue(newValue);
                        }}
                      />
                    </div>
                  )}
                </Field>
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Submit Review
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

export default LeaveReview;
