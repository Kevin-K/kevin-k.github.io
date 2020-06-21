import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withPrefix } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
export const navHeight = 48;
const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    whiteSpace: 'pre',
    pointerEvents: 'none',
    marginTop: theme.spacing(),
    marginLeft: theme.spacing(),
  },
  root: {
    height: `${navHeight}px`,
    // remove nav on print
    '@media print': {
      display: 'none',
    },
  },
  bar: {
    display: 'flex',
  },
}));

const Nav = props => {
  const { title, location, navLinks = [] } = props;
  const curPath = location.pathname.replace(/\/+$/, '');
  const classes = useStyles();
  return (
    <AppBar position="relative" classes={{ root: classes.root }}>
      <div className={classes.bar}>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Tabs value={withPrefix(curPath)}>
          {navLinks.map(({ title, path }) => (
            <Tab
              label={title}
              to={path}
              value={withPrefix(path)}
              component={Link}
              key={title}
            />
          ))}
        </Tabs>
      </div>
    </AppBar>
  );
};

Nav.propTypes = {
  title: PropTypes.string,
};

Nav.defaultProps = {
  title: '{Title}',
};

export default Nav;
