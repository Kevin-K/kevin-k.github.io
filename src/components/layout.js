import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { StaticQuery, graphql } from 'gatsby';
import SideNav from './sidenav';
import { theme } from '../styles/theme';
import { nav, page, frame } from '../styles';
const styles = theme => ({
  root: {},
  nav: nav(theme),
  frame: frame(theme),
  page: page(theme),
});

const Layout = props => {
  const { classes, children, location } = props;

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
        <MuiThemeProvider theme={theme}>
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
        </MuiThemeProvider>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Layout);
