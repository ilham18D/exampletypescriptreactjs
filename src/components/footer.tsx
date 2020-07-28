import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
export default function Copyright() {
  return (
    <>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link component="button" color="primary" href="https://in-box.id/">
          Inbox
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
}
