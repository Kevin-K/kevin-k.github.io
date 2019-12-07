import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/layout';

// Build out the styles from the common libraries
const styles = theme => ({});

const ContactPage = props => {
  const { classes, ...other } = props;

  return (
    <Layout {...other}>
      <Typography variant="subtitle1">
        You can me reach via: [<a href="https://github.com/Kevin-K">Github</a>|
        <a href="https://www.linkedin.com/in/kevin-kelly-4530a984">LinkedIn</a>|
        <a href="mailto:kevin@kevinjkelly.net">Email</a>]
      </Typography>
    </Layout>
  );
};

export default withStyles(styles)(ContactPage);
