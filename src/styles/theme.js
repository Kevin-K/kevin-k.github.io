
import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';

export const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: grey,
  },
  typography: {
    useNextVariants: true,
  },
});