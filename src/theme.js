import {experimental_extendTheme as extendTheme} from '@mui/material/styles'



const APP_BAR_HEUGHT = '65px'
const  BOAR_BAR_HEIGHT = '58px'
const  BOAR_CONTENT_HEIGHT = `calc(100vh - (${APP_BAR_HEUGHT} + ${BOAR_BAR_HEIGHT}))`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'
const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEUGHT,
    boarBarHeight: BOAR_BAR_HEIGHT,
    boardContentHeight: BOAR_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT,
  },
  colorSchemes: {
    light: {},
    dark: {}
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white',
            borderRadius: '8px'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderWidth: "0.5px",
          '&:hover': {
            borderWidth: "0.5px",
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': {fontSize: '0.875rem',}
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '& fieldset': {borderWidth: '0.5px !important'},
          '&:hover fieldset': {borderWidth: '1px !important'},
          '&.Mui-focused fieldset': {borderWidth: '1px !important'}
        }
      }
    }
  }
  // ...other properties
});

export default theme;
