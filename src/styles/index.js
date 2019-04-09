/**
 * JSS in CSS styling.
 * Intended to be passed to Material UI withStyles HOC.
 */
export const card = theme => ({
  textAlign: 'center',
  padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`,
  margin: theme.spacing.unit * 2,
  // fill the parent width with the card even if
  // not filling the card fully
  width: '100%',
});
