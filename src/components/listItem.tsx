import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { NavLink } from "react-router-dom";
import { useStyleDashboard } from "../style";

interface MenuListItemProps {
  to: string;
  text: string;
  icon: React.ReactElement;
}

export function MenuListItemLinkDashboard({
  to,
  text,
  icon,
}: MenuListItemProps) {
  return (
    <ListItem button component={NavLink} to={to}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

export function MenuListItemLink({ to, text, icon }: MenuListItemProps) {
  const classes = useStyleDashboard();
  return (
    <ListItem
      button
      component={NavLink}
      to={to}
      activeClassName={classes.activeClassLink}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}
interface MenuSubListItemProps {
  text: string;
}
export const MenuSubListItem: React.FunctionComponent<MenuSubListItemProps> = ({
  children,
  text,
}) => {
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {text}
        </ListSubheader>
      }
    >
      {children}
    </List>
  );
};

interface MenuListItemButton {
  text: string;
  onClick(): void;
}
export function MenuListItemButton({ text, onClick }: MenuListItemButton) {
  return (
    <ListItem button onClick={onClick}>
      <ListItemText primary={text} />
    </ListItem>
  );
}
