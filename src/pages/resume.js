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
import Work from '../components/resume/work';
import Volunteer from '../components/resume/volunteer';
import Education from '../components/resume/education';
import Skill from '../components/resume/skill';
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
        <Heading {...resumeData.basics} disableContact />
        <Content title="SUMMARY">
          <span> {resumeData.basics.summary}</span>
        </Content>
        <Content title="EXPERIENCE">
          {resumeData.work.map(entry => (
            <Work {...entry} />
          ))}
        </Content>
        <Content title="VOLUNTEER">
          {resumeData.volunteer.map(entry => (
            <Volunteer {...entry} />
          ))}
        </Content>
        <Content title="EDUCATION">
          {resumeData.education.map(entry => (
            <Education {...entry} />
          ))}
        </Content>
        <Content title="SKILLS">
          {resumeData.skills.map(entry => (
            <Skill {...entry} />
          ))}
        </Content>
      </Card>
    </Layout>
  );
};

export default withRoot(withStyles(styles)(ResumePage));
