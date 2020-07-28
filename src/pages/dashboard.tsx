import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ShoppingBasket } from "@material-ui/icons";

export default function DashboardPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={11}>
        <Card>
          <CardContent>
            <ShoppingBasket />
            <Typography gutterBottom variant="h5" component="h2">
              Home page
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
