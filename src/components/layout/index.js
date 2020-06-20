import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStaticQuery, graphql } from 'gatsby';
import SideNav from './sidenav';

export const drawerWidth = 145;
const useStyles = makeStyles(theme => ({
  root: {},
  nav: {
    width: drawerWidth,

    // remove nav on print
    '@media print': {
      display: 'none',
    },
  },
  frame: {
    marginLeft: drawerWidth,

    // remove nav margin on print
    '@media print': {
      marginLeft: 0,
    },
  },
  page: {
    minHeight: '100vh',
    margin: `auto`,
    overflow: 'auto',
    maxWidth: theme.breakpoints.values.md - drawerWidth,
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,

    // remove extra space and card effect on print
    '@media print': {
      boxShadow: `none`,
      padding: 0,
    },
  },
}));

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        navLinks {
          title
          path
        }
      }
    }
  }
`;

export default function Layout({ children, location }) {
  const classes = useStyles();
  const data = useStaticQuery(query);
  return (
    <>
      <CssBaseline />
      <Helmet title={data.site.siteMetadata.title} meta={[]}>
        <html lang="en" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Helmet>
      <div className={classes.root}>
        <SideNav
          title={data.site.siteMetadata.title}
          navLinks={data.site.siteMetadata.navLinks}
          classes={{
            paperAnchorLeft: classes.nav,
          }}
          location={location}
          anchor="left"
        />
        <div className={classes.frame}>
          <div className={classes.page}>{children}</div>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

