import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/layout';
import { card } from '../styles';
import withRoot from '../withRoot';
import Typography from '@material-ui/core/Typography';
import resume from '../assets/resume.json';
import Heading from '../components/resume/heading';

// Build out the styles from the common libraries
const styles = theme => ({
  page: {
    // use the card theme
    ...card(theme),
    // but override a few things to act more like a piece of paper
    padding: `20px 40px`,
    textAlign: 'left',
  },
});

const ResumePage = props => {
  const { classes, ...other } = props;
  return (
    <Layout {...other}>
      <Card className={classes.page}>
        <Heading {...resume.basics} />
      </Card>
    </Layout>
  );
};

export default withRoot(withStyles(styles)(ResumePage));
