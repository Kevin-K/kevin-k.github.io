import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import resumeData from '../assets/resume.json';
import { Heading, Content, Work, Volunteer, Education, Skills } from 'resume-react';

// Build out the styles from the common libraries
// add the resume page theme to the layout's content
const useStyles = makeStyles(theme => ({
  page: {
    textAlign: 'left',
    // padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    '& > :not(:first-child)': {
      paddingTop: theme.spacing(),
    },
    '& > :not(:last-child)': {
      borderBottom: 'solid 1px #CFCFCF',
      paddingBottom: theme.spacing(),
    },
    // remove the card effect on small screens
    [theme.breakpoints.down('sm')]: {
      margin: `auto`,
      boxShadow: `none`,
    },
  },
}));

export default function ResumePage() {
  const classes = useStyles();
  return (
    <div className={classes.page}>
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
          <Skills {...entry} key={`${entry.name}-${entry.level}`} />
        ))}
      </Content>
    </div>
  );
}
