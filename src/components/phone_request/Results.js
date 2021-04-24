import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MaterialTable from 'material-table';
import {
  Box,
  makeStyles,
  Card
} from '@material-ui/core';
import tableIcons from 'src/utils/icons';
import instance from 'src/connection';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none'
  }
}));

const Results = ({ className, ...rest }) => {
  const classes = useStyles();

  const [phoneRepair, setPhoneRepair] = useState([]);

  useEffect(() => {
    instance
      .get('/phone-request/get_current_user_data/')
      .then((res) => setPhoneRepair(res.data));
  }, []);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <MaterialTable
            icons={tableIcons}
            columns={[{ title: 'Phone', field: 'fields.phone_name' },
              { title: 'Detail', field: 'fields.phone_details' },
            ]}
            data={phoneRepair}
            title="Phone Request"
            options={{
              pageSize: 10,
            }}
            editable={false}
          />
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string
};

export default Results;
