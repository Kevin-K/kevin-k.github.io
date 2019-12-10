import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { row, column, fixedColumn } from './styles';

const useStyles = makeStyles(theme => ({
  root: row(theme),
  // Even though this is a column, we want a fixed width
  title: {
    ...column(theme),
    ...fixedColumn(120),
  },
  // This column can take the rest of the width
  content: {
    ...column(theme),
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
}));

/**
 * Resume content block.
 */
const Content = ({ title, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body2" className={classes.content} component="div">
        {children}
      </Typography>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Content.defaultProps = {
  title: '',
  children: '',
};
export default Content;
