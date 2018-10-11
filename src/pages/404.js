import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/layout';
import { card } from '../styles';

// Build out the styles from the common libraries
const styles = theme => ({
  card: card(theme),
});


const NotFoundPage = props => {
  const { classes, ...other } = props;

  return (
    <Layout {...other}>
      <Card className={classes.card}>
        <h4>
          404: Page not found.
        </h4>
      </Card>
    </Layout>);
};

export default withStyles(styles)(NotFoundPage);
