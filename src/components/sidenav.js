import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { navigate, withPrefix } from 'gatsby';
import Branding from './branding';
import avatar from '../images/avatar.jpg';

const SideNav = props => {
  const { title, location, ...other } = props;
  return (
    <Drawer variant="persistent" open {...other}>
        <List>
          <ListItem>
            <Typography variant="subtitle1" color="secondary">
              <Branding avatar={avatar} title={title} />
            </Typography>
          </ListItem>
          <Divider />
          <ListItem
            button
            onClick={() => navigate('/')}
            selected={location.pathname === withPrefix('/')}
          >
            <Typography variant="body2" color="secondary">
              About
            </Typography>
          </ListItem>
          <ListItem
            button
            onClick={() => navigate('/contact')}
            selected={location.pathname === withPrefix('/contact')}
          >
            <Typography variant="body2" color="secondary">
              Contact
            </Typography>
          </ListItem>
        </List>
    </Drawer>
  );
};

SideNav.propTypes = {
  title: PropTypes.string,
};

SideNav.defaultProps = {
  title: '{Title}',
};

export default SideNav;
