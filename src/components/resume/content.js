import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { row, column, fixedColumn } from '../styles';
const styles = theme => ({
  row: row(theme),
  column: column(theme),
  root: {},
  // Even though this is a column, we want a fixed width
  title: {
    ...fixedColumn(120),
    marginBottom: theme.spacing.unit * 3,
  },
  // This column can take the rest of the width
  content: {
    // Put a margin between each child element
    '& > :not(:last-child)': {
      marginBottom: theme.spacing.unit * 3,
    },
  },
});

/**
 * Resume content block.
 */
const Content = ({ title, classes, children }) => {
  return (
    <div className={`${classes.row} ${classes.root}`}>
      <div className={`${classes.column} ${classes.title}`}>{title}</div>
      <div className={`${classes.column} ${classes.content}`}>{children}</div>
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
