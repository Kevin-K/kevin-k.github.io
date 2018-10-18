import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { StaticQuery, graphql } from 'gatsby';
import SideNav from './sidenav';
import { theme } from "../styles/theme";
const drawerWidth = 180;
const styles = theme => ({
  root: {},
  drawer: {
    width: drawerWidth,
  },
  contentFrame: {
    marginLeft: drawerWidth,
    padding: theme.spacing.unit * 3,
  },
  content: {
    margin: `auto ${theme.spacing.unit}`,
  },
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
              paperAnchorLeft: classes.drawer,
            }}
            location={location}
            anchor="left"
          />
          <div className={classes.contentFrame}>
            <div className={classes.content}>{children}</div>
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
