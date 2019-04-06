import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/layout';
import { card } from '../styles';
import { resume } from '../styles/resume';
import withRoot from '../withRoot';
import resumeData from '../assets/resume.json';
import Heading from '../components/resume/heading';
import Content from '../components/resume/content';

// Build out the styles from the common libraries
const styles = theme => ({
  page: {
    // use the card theme
    ...card(theme),
    // but override with any resume-specific theming
    ...resume(theme),
  },
});

const ResumePage = props => {
  const { classes, ...other } = props;
  return (
    <Layout {...other}>
      <Card className={classes.page}>
        <Heading {...resumeData.basics} />
        <Content title="SUMMARY">
          <span> summary goes here</span>
        </Content>
        <Content title="EXPERIENCE">
          <span> experience goes here</span>
        </Content>
        <Content title="VOLUNTEER">
          <span> volunteer goes here</span>
        </Content>
        <Content title="EDUCATION">
          <span> education goes here</span>
        </Content>
        <Content title="SKILLS">
          <span> skills goes here</span>
        </Content>
      </Card>
    </Layout>
  );
};

export default withRoot(withStyles(styles)(ResumePage));
