import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  page: {
    padding: theme.spacing(2),
  },
}));
const ContactPage = props => {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Typography variant="subtitle1">
        You can me reach via: [<a href="https://github.com/Kevin-K">Github</a>|
        <a href="https://www.linkedin.com/in/kevin-kelly-4530a984">LinkedIn</a>|
        <a href="mailto:kevin@kevinjkelly.net">Email</a>]
      </Typography>
    </div>
  );
};

export default ContactPage;
