import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { row, column, fixedColumn } from '../styles';
const styles = theme => ({
  row: row(theme),
  column: column(theme),
  root: {
    paddingTop: theme.spacing(),
    paddingBottom: theme.spacing(),
  },
  // Even though this is a column, we want a fixed width
  title: {
    ...fixedColumn(120),
    marginBottom: theme.spacing(),
  },
  // This column can take the rest of the width
  content: {
    // Put a margin between each child element
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(),

      // mobile: add space between content for mobile
      [theme.breakpoints.down('sm')]: {
        '@media not print': {
          marginBottom: theme.spacing(2),
        },
      },
    },
  },
});

/**
 * Resume content block.
 */
const Content = ({ title, classes, children }) => {
  return (
    <div className={`${classes.row} ${classes.root}`}>
      <Typography
        variant="subtitle1"
        className={`${classes.column} ${classes.title}`}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        className={`${classes.column} ${classes.content}`}
        component="div"
      >
        {children}
      </Typography>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

Content.defaultProps = {
  title: '',
  children: '',
};
export default withStyles(styles)(Content);
