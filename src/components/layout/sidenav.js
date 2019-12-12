import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { navigate, withPrefix } from 'gatsby';
import Branding from './branding';
import avatar from '../../assets/avatar.jpg';

const SideNav = props => {
  const { title, location, navLinks = [], ...other } = props;
  const curPath = location.pathname.replace(/\/+$/, '');
  return (
    <Drawer variant="persistent" open {...other}>
      <List>
        <ListItem>
          <Typography variant="subtitle1">
            <Branding avatar={avatar} title={title} />
          </Typography>
        </ListItem>
        <Divider />
        {navLinks.map(({ title, path }) => (
          <ListItem button onClick={() => navigate(path)} {...other}>
            <ListItemText primary={title} />
          </ListItem>
        ))}
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
