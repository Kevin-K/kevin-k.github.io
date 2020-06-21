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

export default function Post({ slug, title, description, date, duration }) {
  const classes = useStyles();
  return (
    <div className={classes.article}>
      <Typography variant="h5">
        <Link to={slug} className={classes.link}>
          {title}
        </Link>
      </Typography>
      <Typography variant="p">
        {date} - {duration}
      </Typography>
      <Typography variant="subtitle2">{description}</Typography>
    </div>
  );
}
