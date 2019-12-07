import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Build out the styles from the common libraries
const styles = theme => ({});

const NotFoundPage = props => (
      <Typography variant="body1">404: Page not found.</Typography>
  );

export default withStyles(styles)(NotFoundPage);
