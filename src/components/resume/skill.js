import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
});

/**
 * Resume entry for skills.
 * Follows the JSONSchema format for skill entries
 */
const Skills = ({ name, level, keywords }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span>
        <b>
          {name}
          {level ? ` (${level}): ` : `: `}
        </b>
        {keywords.join(', ')}
      </span>
    </div>
  );
};

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
