import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

//theme
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00ce60",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#ddd",
    },
  },
});

// drawer
const drawerWidth = 240;
export const useStyleDashboard = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    listSubheader: {
      color: "#00ce60 !important",
      lineHeight: "28px !important",
    },
    listItemLink: {
      paddingTop: "5px !important",
      paddingBottom: "5px !important",
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    activeClassLink: {
      fontWeight: "bold",
      backgroundColor: "rgba(0, 0, 0, 0.04) !important",
      color: "rgb(97 218 251)  !important",

      "&:hover": {
        color: "rgb(97 218 251) ",
        backgroundColor: "rgba(0, 0, 0, 0.04) !important",
      },
    },
    toolbar: {
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    menuButton: {
      marginRight: 36,
    },

    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
    },
  })
);

//login
export const useLoginStyle = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
