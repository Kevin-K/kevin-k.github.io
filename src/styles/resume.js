/**
 * JSS in CSS styling.
 * Intended to be passed to Material UI withStyles HOC.
 */
export const resume = theme => ({
  textAlign: 'left',
  '& > :not(:last-child)': {
    borderBottom: 'solid 1px #CFCFCF',
  },
});
