import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { StaticQuery, graphql } from 'gatsby';
import SideNav from './sidenav';
import Card from '@material-ui/core/Card';

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

const Layout = ({ children, location }) => {
  const classes = useStyles();
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className={classes.root}>
          <Helmet title={data.site.siteMetadata.title} meta={[]}>
            <html lang="en" />
          </Helmet>
          <SideNav
            title={data.site.siteMetadata.title}
            classes={{
              paperAnchorLeft: classes.nav,
            }}
            location={location}
            anchor="left"
          />
          <div className={classes.frame}>
            <Card className={classes.page}>{children}</Card>
          </div>
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
