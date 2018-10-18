import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/layout';
import { card } from '../styles';
import withRoot from '../withRoot';

// Build out the styles from the common libraries
const styles = theme => ({
  card: card(theme),
});

const ContactPage = props => {
  const { classes, ...other } = props;

  return (
    <Layout {...other}>
      <Card className={classes.card}>
        <Typography variant="body1">
          You can me reach via: [<a href="https://github.com/Kevin-K">Github</a>|
          <a href="https://www.linkedin.com/in/kevin-kelly-4530a984">
            LinkedIn
          </a>
          |<a href="mailto:kevin@kevinjkelly.net">Email</a>]
        </Typography>
      </Card>
    </Layout>
  );
};

export default withRoot(withStyles(styles)(ContactPage));
