import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../assets/avatar.jpg';

const useStyles = makeStyles(theme => ({
  avatar: {
    height: 220,
    display: 'block',
    margin: `auto`,
    borderRadius: '4px',
  },
  body: {
    marginTop: theme.spacing(3),
    textAlign: 'center'
  },
}));

export default function AboutPage() {
  const classes = useStyles();
  return (
    <div>
      <img src={avatar} className={classes.avatar} alt="Kevin Kelly" />
      <Typography variant="body1" className={classes.body}>
        I'm a software engineer living and working in Northern Virginia. I'm passionate about mentoring and sharing
        any knowledge I can. My skills and interests revolve around all things web.
        When I'm not working on code I'm out rock climbing or hiking with my wife and dog.
      </Typography>
      <Typography variant="body1" className={classes.body}>
        You can me reach via: [<a href="https://github.com/Kevin-K">Github</a>|
        <a href="https://www.linkedin.com/in/kevin-kelly-4530a984">LinkedIn</a>|
        <a href="mailto:kevin@kevinjkelly.net">Email</a>]
      </Typography>
    </div>
  );
}

