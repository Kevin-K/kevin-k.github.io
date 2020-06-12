/**
 * CSS in JS styling (JSS).
 * Intended to be passed to Material UI  makeStyles hook.
 */

/**
 * A basic row container class,
 * children should use the column class to
 * build a row/column structure
 */
export const row = theme => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%',
  // mobile: row's become block for forced 1-col
  [theme.breakpoints.down('sm')]: {
    '@media not print': {
      display: 'block',
    },
  },
});

/**
 * A column to place within a row
 */
export const column = theme => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  // mobile: column = row
  [theme.breakpoints.down('sm')]: {
    '@media not print': {
      display: 'block',
    },
  },
});

export const fixedColumn = size => ({
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: size,
});

/**
 * A space-saver, doesn't indent ul's children.
 * Buys some extra horizontal room in resume lists
 */
export const compactList = theme => ({
  margin: '8px 0px',
  padding: '0px 0px 0px 16px',

  // for mobile, space out list children (ex: li)
  // (unless printing)
  [theme.breakpoints.down('sm')]: {
    '@media not print': {
      '& > *': {
        margin: '8px 0px',
      },
    },
  },
});
