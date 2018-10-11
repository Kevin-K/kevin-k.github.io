import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/layout';
import { card } from '../styles';

// Build out the styles from the common libraries
const styles = theme => ({
  card: card(theme),
});

const ContactPage = props => {
  const { classes, ...other } = props;

  return (
    <Layout {...other}>
      <Card className={classes.card}>
        <h4>
          You can reach via: [<a href="https://github.com/Kevin-K">Github</a>|
          <a href="https://www.linkedin.com/in/kevin-kelly-4530a984">
            LinkedIn
          </a>
          |<a href="mailto:kevin@kevinjkelly.net">Email</a>]
        </h4>
      </Card>
    </Layout>
  );
};

export default withStyles(styles)(ContactPage);
