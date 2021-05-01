/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableCell,
  TableRow,
  Typography
} from '@material-ui/core';
import instance from 'src/connection';

const PhoneDetails = ({ phone, ...rest }) => (
  <Card {...rest}>
    <PerfectScrollbar>
      <Box sx={{ minWidth: 500 }}>
        <Table>
          <TableRow>
            <TableCell>
              <Typography variant="h4">{phone.phone.name}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="h5">Phone Brand</Typography>
            </TableCell>
            <TableCell>
              {phone.phone.brand}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="h5">Screen Size</Typography>
            </TableCell>
            <TableCell>
              {phone.screen_size}
              inches
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="h5">Dimension</Typography>
            </TableCell>
            <TableCell>
              {phone.dimension}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="h5">Price</Typography>
            </TableCell>
            <TableCell>
              Rp.
              {phone.price}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="h5">Front Camera</Typography>
            </TableCell>
            <TableCell>
              {phone.front_camera}
              {' '}
              MP
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="h5">Operating System</Typography>
            </TableCell>
            <TableCell>
              {phone.operating_system}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="h5">Storage</Typography>
            </TableCell>
            <TableCell>
              {phone.storage}
              {' '}
              GB
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="h5">RAM</Typography>
            </TableCell>
            <TableCell>
              {phone.ram}
              {' '}
              MP
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="h5">Battery Capacity</Typography>
            </TableCell>
            <TableCell>
              {phone.battery_capacity}
              mAh
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="h5">Battery Type</Typography>
            </TableCell>
            <TableCell>
              {phone.battery_type}
            </TableCell>
          </TableRow>
        </Table>
      </Box>
    </PerfectScrollbar>
  </Card>
);

PhoneDetails.propTypes = {
  phone: PropTypes.object.isRequired
};

export default PhoneDetails;
