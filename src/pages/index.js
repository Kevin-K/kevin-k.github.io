import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/layout';
import { card } from '../styles';
import withRoot from '../withRoot';

// Build out the styles from the common libraries
const styles = theme => ({
  card: card(theme),
});

const IndexPage = props => {
  const { classes, ...other } = props;

  return (
    <Layout {...other}>
      <Card className={classes.card}>
        <h4>I'm a fullstack engineer, I build webapps.</h4>
      </Card>
    </Layout>
  );
};

export default withRoot(withStyles(styles)(IndexPage));
