import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {},
  primary: {
    fontSize: '20px',
  },
  secondary: {
    fontSize: '12px',
    '& > *': {
      display: 'inline-block',
    },
    '& > :not(:last-child)': {
      paddingRight: '8px',
    },
  },
});

/**
 * Util, string builder for USA formatted addresses from JSONResume
 * schema's basic.location specification.
 */
const Location = ({ address, city, region, postalCode, countryCode }) =>
  `${address} ${city} ${region}, ${postalCode} ${countryCode}`;

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
const Heading = ({ name, title, email, phone, location, classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.primary}>
        <span>{name}</span>
        <span>, {title}</span>
      </div>
      <div className={classes.secondary}>
        <a href={`tel:${phone}`}>{phone} </a>
        <a href={`mailto:${email}?subject=Inquiry`}>{email} </a>
        <span>
          <Location {...location} />
        </span>
      </div>
    </div>
  );
};

Heading.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.shape(Location.propTypes),
  classes: PropTypes.shape({
    root: PropTypes.string,
    primary: PropTypes.string,
    secondary: PropTypes.string,
  }).isRequired,
};

Heading.defaultProps = {
  name: 'John Smith',
  title: 'Software Engineer',
  phone: '555-123-4567',
  email: 'jsmith@example.com',
  location: Location.defaultProps,
};
export default withStyles(styles)(Heading);