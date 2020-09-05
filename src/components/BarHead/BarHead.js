import React from 'react';
import Badge from '@material-ui/core/Badge';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import themedf from '../../themes/themedf'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `0px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

export default function BarHead(){
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:985px)');
    return (<div className="header">
        <ThemeProvider  theme={themedf}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    Croppy Pedidos
                    </Typography>
                    <Button color="inherit">Iniciar sesión</Button>
                    <IconButton aria-label="cart">
                    <StyledBadge badgeContent={1} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            {matches ? <div className="Menu">Ejemplo menu</div> : "Otro dispositivo"}
        </ThemeProvider>
    </div>);
}