/**
 * JSS in CSS styling.
 * Intended to be passed to Material UI  makeStyles hook.
 */
export const resume = theme => ({
  textAlign: 'left',
  '& > :not(:first-child)': {
    paddingTop: theme.spacing(),
  },
  '& > :not(:last-child)': {
    borderBottom: 'solid 1px #CFCFCF',
    paddingBottom: theme.spacing(),
  },
});
