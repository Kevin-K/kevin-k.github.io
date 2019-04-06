/**
 * CSS in JS styling (JSS).
 * Intended to be passed to Material UI withStyles HOC.
 *
 * This components/styles/inde.js differs from styles/index.js
 * because these are common "util" styles for the components,
 * not page-level stylings
 */

/**
 * A basic row container class,
 * children should use the column class to
 * build a row/column structure
 */
export const row = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%',
};

/**
 * A column to place within a row
 */
export const column = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
};

export const fixedColumn = px => ({
  flexGrow: 0,
  flexSrink: 0,
  flexBasis: px,
});
