import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  FileText as FileTextIcon,
  Inbox as InboxIcon,
  Bookmark as BookmarkIcon,
  Heart as HeartIcon,
  Settings as SettingsIcon,
  Send as SendIcon,
  FilePlus as FilePlusIcon
} from 'react-feather';
import NavItem from './NavItem';

const user = {
  // avatar: '/static/images/avatars/logo.png',
  jobTitle: localStorage.getItem('username'),
  name: 'Hello,'
};

const items = [
  {
    href: '/app/phone',
    icon: BookmarkIcon,
    title: 'Phone List'
  },
  {
    href: '/app/request',
    icon: SendIcon,
    title: 'Request A Phone'
  },
  {
    href: '/app/review',
    icon: HeartIcon,
    title: 'Leave A Review'
  },
  {
    href: '/app/my-phone-review',
    icon: InboxIcon,
    title: 'My Phone Review'
  },
  {
    href: '/app/my-phone-request',
    icon: FilePlusIcon,
    title: 'My Phone Request'
  },
  {
    href: '/app/my-phone-transaction',
    icon: FileTextIcon,
    title: 'My Phone Transactions'
  },
  {
    href: '/app/my-phone-repair',
    icon: SettingsIcon,
    title: 'My Phone Repair'
  },
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
