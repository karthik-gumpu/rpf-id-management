import { createMuiTheme } from "@material-ui/core/styles";
import { green, red, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4688F1",
      main: "#4688F1",
      dark: "#4688F1",
      contrastText: "#fff",
    },
  },
  //   overrides: {
  //     MuiButton: {
  //       root: {
  //         borderRadius: 2,
  //         opacity: 1,
  //         borderRadius: 5,
  //       },

  //       contained: {
  //         backgroundColor: "#FFFFFF",
  //         "&:hover": {
  //           backgroundColor: "#FFFFFF",
  //         },
  //       },
  //       containedPrimary: {
  //         backgroundColor: "#4688F1",
  //         "&:hover": {
  //           backgroundColor: "#4688F1",
  //         },
  //       },
  //       containedSecondary: {
  //         color: "#fff",
  //         backgroundColor: "#464646",
  //         "&:hover": {
  //           backgroundColor: "#464646",
  //         },
  //       },
  //       outlinedPrimary: {
  //         color: "#4688F1",
  //         border: "1px solid #4688F1",
  //         // background: "#FFFFFF 0% 0% no-repeat padding-box",
  //         "&:hover": {
  //           border: "1px solid #4688F1",
  //         },
  //       },
  //       outlinedSecondary: {
  //         color: "#464646",
  //         border: "1px solid #464646",
  //         // background: "#FFFFFF 0% 0% no-repeat padding-box",
  //         "&:hover": {
  //           border: "1px solid #464646",
  //           backgroundColor: "light #464646",
  //         },
  //       },
  //       outlinedSuccess: {
  //         color: green[500],
  //         border: `1px solid ${green[500]}`,
  //         // background: "#FFFFFF 0% 0% no-repeat padding-box",
  //         "&:hover": {
  //           border: `1px solid ${green[500]}`,
  //         },
  //       },
  //       outlinedError: {
  //         color: red[500],
  //         border: `1px solid ${red[500]}`,
  //         // background: "#FFFFFF 0% 0% no-repeat padding-box",
  //         "&:hover": {
  //           border: `1px solid ${red[500]}`,
  //         },
  //       },
  //       textPrimary: {
  //         color: "#4688F1",
  //       },
  //       textSecondary: {
  //         color: "#464646",
  //         "&:hover": {
  //           backgroundColor: "light #464646",
  //         },
  //       },
  //       // sizeLarge: {
  //       // 	fontSize: 16,
  //       // 	minWidth: 131,
  //       // },
  //     },
  //   },
});

export default theme;
