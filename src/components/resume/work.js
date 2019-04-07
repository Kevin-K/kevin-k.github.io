import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { row, column, compactList } from '../styles';

const styles = {
  row,
  column,
  compactList,
  root: {},
  title: {},
  description: {},
  timespan: {
    alignItems: 'flex-end',
  },
};

/**
 * Resume entry for work experience.
 * Follows the JSONSchema format for work entries
 */
const Work = ({
  classes,
  name,
  description,
  url,
  position,
  startDate,
  endDate,
  highlights,
}) => {
  return (
    <div className={classes.root}>
      {/* Work heading */}
      <div className={classes.row}>
        <div className={`${classes.column} ${classes.title}`}>
          <span>
            <a href={url}>{name}</a>, {position}
          </span>
        </div>
        <div className={`${classes.column} ${classes.timespan}`}>
          {startDate} to {endDate}
        </div>
      </div>

      {/* Work description */}
      <div className={`${classes.row} ${classes.description}`}>
        {description}
      </div>

      {/* Work highlights */}
      <ul className={classes.compactList}>
        {highlights.map(entry => (
          <li>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

Work.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

Work.defaultProps = {
  name: '',
  position: '',
};
export default withStyles(styles)(Work);
