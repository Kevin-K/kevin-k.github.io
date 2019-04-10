import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/layout';
import withRoot from '../withRoot';
import Typography from '@material-ui/core/Typography';

// Build out the styles from the common libraries
const styles = theme => ({});

const NotFoundPage = props => {
  const { classes, ...other } = props;

  return (
    <Layout {...other}>
      <Typography variant="body1">404: Page not found.</Typography>
    </Layout>
  );
};

export default withRoot(withStyles(styles)(NotFoundPage));
