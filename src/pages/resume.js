import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/layout';
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
// add the resume page theme to the layout's content
const styles = theme => ({
  page: resume(theme),
});

const ResumePage = props => {
  return (
    <Layout {...props}>
      <Heading {...resumeData.basics} />
      <Content title="SUMMARY">
        <span> {resumeData.basics.summary}</span>
      </Content>
      <Content title="EXPERIENCE">
        {resumeData.work.map(entry => (
          <Work {...entry} key={`${entry.name}-${entry.startDate}`} />
        ))}
      </Content>
      <Content title="VOLUNTEER">
        {resumeData.volunteer.map(entry => (
          <Volunteer {...entry} key={`${entry.name}-${entry.startDate}`} />
        ))}
      </Content>
      <Content title="EDUCATION">
        {resumeData.education.map(entry => (
          <Education {...entry} key={`${entry.name}-${entry.startDate}`} />
        ))}
      </Content>
      <Content title="SKILLS">
        {resumeData.skills.map(entry => (
          <Skill {...entry} key={`${entry.name}-${entry.level}`} />
        ))}
      </Content>
    </Layout>
  );
};

export default withRoot(withStyles(styles)(ResumePage));
