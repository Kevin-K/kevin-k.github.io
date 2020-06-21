import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  article: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
  },
}));

export default function Post({ path, title, description, date }) {
  const classes = useStyles();
  return (
    <div className={classes.article}>
      <Typography variant="subtitle1">{date}</Typography>
      <Typography variant="h5">
        <Link to={path} className={classes.link}>
          {title}
        </Link>
      </Typography>
      <Typography variant="subtitle2">{description}</Typography>
    </div>
  );
}
