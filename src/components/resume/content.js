import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { row, column, fixedColumn } from '../styles';
const styles = theme => ({
  row,
  column,
  root: {},
  title: {
    // Even though this is a column, we want a fixed width
    ...fixedColumn(120),
  },
  content: {
    // This column can take the rest of the width
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
