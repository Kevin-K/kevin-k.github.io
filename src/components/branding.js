import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
  },
  avatar: {
    height: 110,
    display: 'block',
    margin: `auto`,
    borderRadius: '4px',
  },
  title: {
    display: 'block',
    textAlign: 'center',
  },
}));

const Branding = ({ title, avatar, className }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${className}`}>
      <img src={avatar} className={classes.avatar} alt={title} />
      <span className={classes.title}>{title}</span>
    </div>
  );
};

Branding.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.node,
};

Branding.defaultProps = {
  avatar: '{image goes here}',
  title: '{name}',
};

export default Branding;
