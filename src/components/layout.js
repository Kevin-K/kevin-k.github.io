import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { StaticQuery, graphql } from 'gatsby';
import SideNav from './sidenav';
import { nav, page, frame } from '../styles';
const useStyles = makeStyles(theme => ({
  root: {},
  nav: nav(theme),
  frame: frame(theme),
  page: page(theme),
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
