import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { row, column, compactList } from '../styles';
import { yearMonthDayDate, monthYearString } from '../../util/timespan';

const styles = theme => ({
  row: row(theme),
  column: column(theme),
  compactList: compactList(theme),
  root: {},
  title: {
    flex: 2,
  },
  timespan: {
    alignItems: 'flex-end',
  },
  description: {},
});

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
  const sDate = yearMonthDayDate(startDate);
  const eDate = yearMonthDayDate(endDate);

  // startDate is required
  const startString = monthYearString(sDate);

  // endDate is not (could be presently employed)
  const endString = eDate ? monthYearString(eDate) : 'Present';

  return (
    <div className={classes.root}>
      {/* Work heading */}
      <Typography variant="subtitle1" className={classes.row}>
        <div className={`${classes.column} ${classes.title}`}>
          <span>
            <b>{url ? <a href={url}>{name}</a> : name}</b>, {position}
          </span>
        </div>
        <div className={`${classes.column} ${classes.timespan}`}>
          {startString} to {endString}
        </div>
      </Typography>

      {/* Work description */}
      <Typography
        variant="body2"
        className={`${classes.row} ${classes.description}`}
      >
        {description}
      </Typography>

      {/* Work highlights */}
      <ul className={classes.compactList}>
        {highlights.map(entry => (
          <li key={entry}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

Work.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  url: PropTypes.string,
  endDate: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

Work.defaultProps = {
  position: '',
  url: '',
  endDate: '',
};
export default withStyles(styles)(Work);
