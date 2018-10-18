import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/layout';
import { card } from '../styles';
import withRoot from '../withRoot';
import Typography from '@material-ui/core/Typography';

// Build out the styles from the common libraries
const styles = theme => ({
  card: card(theme),
});


const NotFoundPage = props => {
  const { classes, ...other } = props;

  return (
    <Layout {...other}>
      <Card className={classes.card}>
        <Typography variant="body1">
          404: Page not found.
        </Typography>
      </Card>
    </Layout>);
};

export default withRoot(withStyles(styles)(NotFoundPage));
