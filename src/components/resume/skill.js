import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {},
};

/**
 * Resume entry for skills.
 * Follows the JSONSchema format for skill entries
 */
const Skills = ({ classes, name, level, keywords }) => {
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
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

Skills.defaultProps = {
  name: '',
  level: '',
  keywords: [],
};
export default withStyles(styles)(Skills);
