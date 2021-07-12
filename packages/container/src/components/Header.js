import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { getCartItemsCount } from '../utils/cart.utils';

const useStyles = makeStyles((theme) => ({
  '@global': {
    grow: {
      flexGrow: 1,
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default function Header({ displayName, isSignedIn, onSignOut, cartItems }) {
  const classes = useStyles();

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            className={classes.grow}
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            Y Company
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {(isSignedIn) && <Typography
                variant="h6"
                color="inherit"
              >
                Welcome {displayName}
              </Typography>
            }
            <Button
              color="inherit"
              className={classes.link}
              component={RouterLink}
              to={'/shop'}
            >
              Shop
            </Button>
            <IconButton aria-label="shopping Cart" color="inherit" component={RouterLink} to={'/cart'}>
                <Badge badgeContent={getCartItemsCount(cartItems)} color="secondary">
                  <AddShoppingCartIcon />
                </Badge>
            </IconButton>
            <Button
              edge="end"
              color="primary"
              variant="outlined"
              className={classes.link}
              component={RouterLink}
              to={isSignedIn ? '/' : '/auth/signin'}
              onClick={onClick}
            >
              {isSignedIn ? 'Logout' : 'Login'}
            </Button>
          </div>
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
