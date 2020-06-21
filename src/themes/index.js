import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export default responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: { main: '#455A64' },
      secondary: { main: '#eeeeee' },
    },
    typography: {},
  })
);
