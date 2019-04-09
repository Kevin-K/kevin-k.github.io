import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {},
  primary: {},
  secondary: {
    '& > *': {
      display: 'inline-block',
    },
    '& > :not(:last-child)': {
      paddingRight: theme.spacing.unit,
    },
  },
});

/**
 * Util, string builder for USA formatted addresses from JSONResume
 * schema's basic.location specification.
 */
const Location = ({ address, city, region, postalCode, countryCode }) => (
  <span>
    {address} {city} {region}, {postalCode} {countryCode}{' '}
  </span>
);

Location.propTypes = {
  address: PropTypes.string,
  city: PropTypes.string,
  region: PropTypes.string,
  postalCode: PropTypes.string,
  countryCode: PropTypes.string,
};

Location.defaultProps = {
  address: '1 Main St',
  city: 'New York',
  region: 'NY',
  postalCode: '01234',
  countryCode: 'USA',
};

/**
 * Resume heading block, generated from the JSONResume schema's basic
 * (sub-object) specification.
 */
const Heading = ({
  name,
  title,
  email,
  phone,
  location,
  disableContact,
  classes,
}) => {
  return (
    <div className={classes.root}>
      <Typography variant="h5">
        <div className={classes.primary}>
          <span>
            {name}, {title}
          </span>
        </div>
      </Typography>
      {!disableContact && (
        <Typography variant="subtitle1">
          <div className={classes.secondary}>
            <a href={`tel:${phone}`}>{phone} </a>
            <a href={`mailto:${email}?subject=Inquiry`}>{email} </a>
            <Location {...location} />
          </div>
        </Typography>
      )}
    </div>
  );
};

Heading.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.shape(Location.propTypes),
  disableContact: PropTypes.bool,
  classes: PropTypes.shape({
    root: PropTypes.string,
    primary: PropTypes.string,
    secondary: PropTypes.string,
  }).isRequired,
};

Heading.defaultProps = {
  name: '',
  title: '',
  phone: '',
  email: '',
  disableContact: false,
  location: Location.defaultProps,
};
export default withStyles(styles)(Heading);
