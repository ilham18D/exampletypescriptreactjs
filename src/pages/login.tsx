import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useLoginStyle } from "../style";
import { Footer } from "../components";
// import Alert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";
interface LoginState {
  loading: boolean;
  error?: Error;
}

export default function LoginPage() {
  const classes = useLoginStyle();
  // const [state, setState] = React.useState<LoginState>({ loading: false });
  // const { authState } = useLoginApi();
  // const [open, setOpen] = React.useState(false);

  //Dialog reset password setstate
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      {/* <div>
          {state.error && <Alert severity="error">{state.error.message}</Alert>}
        </div> */}

      {/* end dialog reset*/}
      <Container
        component="main"
        maxWidth="xs"
        style={{ backgroundColor: "#fff" }}
      >
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Masuk Sebagai User Admin Kota
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
            />
            <Button
              fullWidth
              variant="contained"
              color="default"
              className={classes.submit}
            >
              Masuk
            </Button>
            <Grid container>
              <Link className={classes.submit} to="/">
                Home
              </Link>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Footer />
        </Box>
      </Container>
    </>
  );
}
