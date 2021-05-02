import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import instance from 'src/connection';

// const user = {
//   avatar: '/static/images/avatars/avatar_6.png',
//   city: 'Los Angeles',
//   country: 'USA',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith',
//   timezone: 'GTM-7'
// };

const AccountProfile = (props) => {
  const [user, setUserData] = useState([]);

  useEffect(() => {
    instance
      .get('/profile/get_current_user/')
      .then((res) => setUserData(res.data));
  }, []);

  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 100,
              width: 100
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user.first_name}
            {' '}
            {user.last_name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.email}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default AccountProfile;
