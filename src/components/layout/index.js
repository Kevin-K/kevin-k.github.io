import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStaticQuery, graphql } from 'gatsby';
import Nav, { navHeight } from './nav';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles(theme => ({
  root: {},
  page: {
    minHeight: `calc(100vh - ${navHeight}px)`,
    margin: `auto`,
    overflow: 'auto',
    maxWidth: theme.breakpoints.values.md,
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
      <Helmet title={data.site.siteMetadata.title} meta={[]}>
        <html lang="en" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Helmet>
      <Nav
        title={data.site.siteMetadata.title}
        navLinks={data.site.siteMetadata.navLinks}
        location={location}
        anchor="left"
      />
      <Paper classes={{ root: classes.page }} elevation={0}>
        {children}
      </Paper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

