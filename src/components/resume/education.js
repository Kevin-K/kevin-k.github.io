import React from 'react';
import PropTypes from 'prop-types';
import Work from './work';
/**
 * Resume entry for education.
 * Following the JSONSchema format, the education schema
 * can be mapped to the work schema where:
 * institution -> name
 * studyType & area -> position
 * gpa -> description
 * courses -> highlights
 */
const Education = ({
  institution,
  area,
  studyType,
  gpa,
  courses,
  ...other
}) => {
  return (
    <Work
      name={institution}
      position={`${studyType} - ${area}`}
      description={`GPA: ${gpa}`}
      highlights={courses}
      {...other}
    />
  );
};

Education.propTypes = {
  institution: PropTypes.string,
  studyType: PropTypes.string,
  area: PropTypes.string,
  gpa: PropTypes.string,
  courses: PropTypes.arrayOf(PropTypes.string),
};

Education.defaultProps = {
  institution: '',
  studyType: '',
  area: '',
  gpa: '',
  courses: [],
};

export default Education;
