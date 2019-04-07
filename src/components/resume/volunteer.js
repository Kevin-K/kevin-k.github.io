import React from 'react';
import PropTypes from 'prop-types';
import Work from './work';
/**
 * Resume entry for volunteer experience.
 * Following the JSONSchema format, the volunteer schema
 * can be mapped to the work schema where:
 * organiation -> name
 * description is unused
 */
const Volunteer = ({ organization, ...other }) => {
  return <Work name={organization} {...other} description={undefined} />;
};

Volunteer.propTypes = {
  organization: PropTypes.string,
};

Volunteer.defaultProps = {
  organization: '',
};

export default Volunteer;
