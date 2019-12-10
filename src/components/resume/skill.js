import React from 'react';
import PropTypes from 'prop-types';

/**
 * Resume entry for skills.
 * Follows the JSONSchema format for skill entries
 */
const Skills = ({ name, level, keywords }) => (
  <div>
    <b>
      {name}
      {level ? ` (${level}): ` : `: `}
    </b>
    {keywords.join(', ')}
  </div>
);

Skills.propTypes = {
  name: PropTypes.string,
  level: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

Skills.defaultProps = {
  name: '',
  level: '',
  keywords: [],
};
export default Skills;
