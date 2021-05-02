import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MaterialTable from 'material-table';
import { Box, makeStyles, Card } from '@material-ui/core';
import tableIcons from 'src/utils/icons';
import instance from 'src/connection';
import Search from '@material-ui/icons/Search';
import { useNavigate } from 'react-router-dom';

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

  const [phoneList, setPhoneList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    instance.get('/phone/').then((res) => setPhoneList(res.data));
  }, []);

  const onCompareButtonClicked = (data) => {
    navigate(`/app/compare-phone/${data[0].id}/${data[1].id}`);
  };

  // const getPhoneDetails = (id) => {
  //   navigate(`/app/phone-detail/${id}`);
  // };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <MaterialTable
            icons={tableIcons}
            columns={[
              {
                title: 'Id',
                field: 'id',
                hidden: true
              },
              { title: 'Name', field: 'name' },
              { title: 'Brand', field: 'brand' }
            ]}
            data={phoneList}
            title="Phone"
            options={{
              pageSize: 10,
              exportButton: true,
              selection: true
            }}
            // onRowClick={(event, rowData) => getPhoneDetails(rowData.id)}
            actions={[
              {
                tooltip: 'Compare Data',
                icon: Search,
                onClick: (evt, data) => {
                  // eslint-disable-next-line no-alert
                  if (data.length > 2) alert('Please select two data only!');
                  else onCompareButtonClicked(data);
                }
              }
            ]}
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
