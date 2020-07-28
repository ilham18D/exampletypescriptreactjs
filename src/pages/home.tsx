import React from "react";

import Drawer from "@material-ui/core/Drawer";
// import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
import { Switch, Route } from "react-router-dom";
import { useStyleDashboard } from "../style";
import { Apps, ShoppingBasket, ExitToApp } from "@material-ui/icons";
import DashboardPage from "./dashboard";

import {
  // MenuListItemButton,
  MenuListItemLink,
  MenuSubListItem,
  MenuListItemLinkDashboard,
} from "../components";
import { Divider } from "@material-ui/core";

export default function HomePage() {
  const classes = useStyleDashboard();

  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}></Toolbar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}>
          <label>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              width={"35%"}
              height={"35%"}
              src={"/logo192.png"}
              alt={"img"}
            />
          </label>
        </div>
        <div className={classes.drawerContainer}>
          <MenuListItemLinkDashboard icon={<Apps />} to="/" text="Dashboard" />
          <Divider />
          <MenuSubListItem text="Menu ">
            <MenuListItemLink
              icon={<ShoppingBasket />}
              to="/menu1"
              text="Menu 1"
            />
          </MenuSubListItem>

          <Divider />
          <MenuSubListItem text="menu 2">
            <MenuListItemLink
              icon={<ShoppingBasket />}
              to="/menu2"
              text="Menu2"
            />
          </MenuSubListItem>
          <Divider />
          <MenuListItemLinkDashboard
            icon={<ExitToApp />}
            to="/login"
            text="Logout"
          />
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Switch>
          <Route exact path="/">
            <DashboardPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
