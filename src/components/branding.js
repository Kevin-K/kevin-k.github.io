import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
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
});
const Branding = props => {
  const { title, avatar, classes, className } = props;
  return (
    <div className={`${classes.root} ${className}`}>
      <img src={avatar} className={classes.avatar} />
      <span className={classes.title}>{title}</span>
    </div>
  );
};

Branding.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.node,
  classes: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

Branding.defaultProps = {
  avatar: '{image goes here}',
  title: '{name}',
};

export default withStyles(styles)(Branding);
