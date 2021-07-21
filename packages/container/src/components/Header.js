import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { getCartItemsCount } from "../utils/cart.utils";

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header({
  displayName,
  isSignedIn,
  onSignOut,
  cartItems,
}) {
  const classes = useStyles();

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
            className={classes.title}
          >
            Y Company
          </Typography>
          {isSignedIn && (
              <Typography variant="h6" color="inherit">
                Welcome {displayName}
              </Typography>
            )}
          <IconButton
            aria-label="shopping Cart"
            color="inherit"
            component={RouterLink}
            to={"/cart"}
          >
            <Badge
              badgeContent={getCartItemsCount(cartItems)}
              color="secondary"
            >
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>

            <Button
              color="inherit"
              className={classes.link}
              component={RouterLink}
              to={"/shop"}
            >
              Shop
            </Button>
            <Button
              // edge="end"
              color="primary"
              // variant="outlined"
              component={RouterLink}
              to={isSignedIn ? "/" : "/auth/signin"}
              onClick={onClick}
            >
              {isSignedIn ? "Logout" : "Login"}
            </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
