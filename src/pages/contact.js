import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Build out the styles from the common libraries
// add the resume page theme to the layout's content
const styles = theme => ({});

const ContactPage = props => (
  <Typography variant="subtitle1">
    You can me reach via: [<a href="https://github.com/Kevin-K">Github</a>|
    <a href="https://www.linkedin.com/in/kevin-kelly-4530a984">LinkedIn</a>|
    <a href="mailto:kevin@kevinjkelly.net">Email</a>]
  </Typography>
);

export default withStyles(styles)(ContactPage);
