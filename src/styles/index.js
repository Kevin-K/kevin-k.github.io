/**
 * JSS JS in CSS styling.
 * Intended to be passed to Material UI withStyles HOC.
 */
export const drawerWidth = 145;

/**
 * Wraps each page, offsets the page from the
 * nav drawer as well as provides resizing based on
 * breakpoints
 * @param {*} theme
 */
export const frame = theme => ({
  marginLeft: drawerWidth,
  // mobile: remove the card effect by removing the padding
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
  '@media print': {
    marginLeft: 0,
  },
});

/**
 * CSS for the navigation pane of the website
 * @param {*} theme
 */
export const nav = theme => ({
  width: drawerWidth,
  '@media print': {
    display: 'none',
  },
});

/**
 * Css applied to each page rendered in the frame.
 * @param {*} theme
 */
export const page = theme => ({
  padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  width: '100%',
  margin: `0 auto`,
  maxWidth: theme.breakpoints.values.md - drawerWidth,
  minHeight: '100vh',
  '@media print': {
    boxShadow: `none`,
    padding: 0
  },
  '& > :not(:first-child)': {
    marginTop: theme.spacing(),
  },
  '& > :not(:last-child)': {
    paddingBottom: theme.spacing(),
  },
});
