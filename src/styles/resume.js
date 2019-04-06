/**
 * JSS in CSS styling.
 * Intended to be passed to Material UI withStyles HOC.
 */
export const resume = theme => ({
  padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`,
  textAlign: 'left',
  '& > :not(:first-child)': {
    paddingTop: theme.spacing.unit * 2,
  },
  '& > :not(:last-child)': {
    paddingBottom: theme.spacing.unit * 2,
    borderBottom: 'solid 1px #CFCFCF',
  },
});
