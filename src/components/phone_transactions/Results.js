import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import moment from 'moment';
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

  const [materialChangeHistory, setMaterialChangeHistory] = useState([]);

  useEffect(() => {
    instance
      .get('/phone-transaction/')
      .then((res) => setMaterialChangeHistory(res.data));
  }, []);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <MaterialTable
            icons={tableIcons}
            columns={[{ title: 'Phone', field: 'fields.phone' },
              { title: 'Price', field: 'fields.price' },
              {
                title: 'Transaction', field: 'fields.transaction_date', width: 20, render: (rowData) => moment(rowData.transaction_date).format('DD/MM/YYYY')
              },
            ]}
            data={materialChangeHistory}
            title="Phone Transactions"
            options={{
              pageSize: 10,
              exportButton: true,
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
