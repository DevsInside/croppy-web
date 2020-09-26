import "./Nav.scss";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import {
  Button,
  DialogContent,
  DialogContentText,
  TextField,
} from "@material-ui/core";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });
  }

  showContact() {
    this.setState({ open: true });
  }

  closeContact(value) {
    this.setState({ open: false });
  }

  render() {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="#home" className="nav-link">
              <span className="link-text logo-text">Croppy</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
            </a>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="cat"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-cat fa-w-16 fa-9x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    className="fa-secondary"
                    d="M503.402,228.885L273.684,19.567c-10.083-9.189-25.288-9.188-35.367-0.001L8.598,228.886
			c-8.077,7.36-10.745,18.7-6.799,28.889c3.947,10.189,13.557,16.772,24.484,16.772h36.69v209.721
			c0,8.315,6.742,15.057,15.057,15.057h125.914c8.315,0,15.057-6.741,15.057-15.057V356.932h74.002v127.337
			c0,8.315,6.742,15.057,15.057,15.057h125.908c8.315,0,15.057-6.741,15.057-15.057V274.547h36.697
			c10.926,0,20.537-6.584,24.484-16.772C514.147,247.585,511.479,236.246,503.402,228.885z"
                  />
                  <path
                    fill="currentColor"
                    className="fa-primary"
                    d="M445.092,42.73H343.973l116.176,105.636v-90.58C460.149,49.471,453.408,42.73,445.092,42.73z"
                  />
                </g>
              </svg>
              <span className="link-text">Inicio</span>
            </Link>
          </li>

          <li className="nav-item">
            <a href="#foods" className="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="cat"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-cat fa-w-16 fa-9x"
              >
                <g>
                  <g className="fa-group">
                    <g>
                      <path
                        fill="currentColor"
                        d="m407 512h-302c-57.891 0-105-47.109-105-105 0-8.291 6.709-15 15-15h482c8.291 0 15 6.709 15 15 0 57.891-47.109 105-105 105z"
                      />
                    </g>
                    <g>
                      <path
                        fill="currentColor"
                        d="m256 0c-140.61 0-256 87.48-256 195 0 8.291 6.709 15 15 15h482c8.291 0 15-6.709 15-15 0-107.52-115.39-195-256-195zm-110.395 115.605-30 30c-5.859 5.859-15.351 5.86-21.211 0-5.859-5.859-5.859-15.352 0-21.211l30-30c5.859-5.859 15.352-5.859 21.211 0s5.86 15.352 0 21.211zm91 0-30 30c-5.859 5.859-15.351 5.86-21.211 0-5.859-5.859-5.859-15.352 0-21.211l30-30c5.859-5.859 15.352-5.859 21.211 0s5.86 15.352 0 21.211zm90 0-30 30c-5.859 5.859-15.351 5.86-21.211 0-5.859-5.859-5.859-15.352 0-21.211l30-30c5.859-5.859 15.352-5.859 21.211 0s5.86 15.352 0 21.211zm82.666 0-30 30c-5.859 5.859-15.351 5.86-21.211 0-5.859-5.859-5.859-15.352 0-21.211l30-30c5.859-5.859 15.352-5.859 21.211 0s5.859 15.352 0 21.211z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        className="fa-secondary"
                        fill="currentColor"
                        d="m15 271c7.2 0 13.5.899 18.9 2.399-2.117 6.82-2.71 8.859-3.9 30-3.9-1.5-8.699-2.399-15-2.399-8.401 0-15-6.601-15-15 0-8.401 6.599-15 15-15z"
                      />
                      <path
                        className="fa-secondary"
                        fill="currentColor"
                        d="m512 286c0 8.399-6.599 15-15 15-6.301 0-11.1.899-15 2.399-.324-5.758.288-16.508-3.9-30 5.4-1.5 11.7-2.399 18.9-2.399 8.401 0 15 6.599 15 15z"
                      />
                    </g>
                  </g>
                  <path
                    className="fa-secondary"
                    fill="currentColor"
                    d="m33.9 273.399c13.5 3.301 22.5 9.901 30 15.601 9.3 6.899 16.199 12 31.199 12s21.601-5.101 30.901-12.001c10.8-8.101 25-17.999 49.9-17.999 25.199 0 38.399 9.899 49.199 17.999 9.302 6.9 15.901 12.001 30.901 12.001s21.599-5.101 30.901-12.001c10.8-8.101 24-17.999 49.199-17.999 24.901 0 39.101 9.899 49.9 17.999 9.3 6.899 15.901 12.001 30.901 12.001s21.899-5.101 31.199-12.001c7.5-5.7 16.5-12.299 30-15.601-3.164-11.788-8.436-22.659-15.216-32.399h-413.768c-6.78 9.74-12.052 20.611-15.216 32.4z"
                  />
                  <path
                    className="fa-secondary"
                    fill="currentColor"
                    d="m463.093 361c11.506-16.421 18.455-36.237 18.907-57.601-6 2.1-10.499 5.7-15.901 9.6-10.8 8.101-24 18.001-49.199 18.001-24.9 0-38.1-9.901-48.9-18.001-9.3-6.9-16.901-11.999-31.901-11.999s-21.899 5.099-31.199 11.999c-10.499 8.101-24 18.001-48.9 18.001s-38.401-9.901-48.9-18.001c-9.3-6.9-16.199-11.999-31.199-11.999s-22.601 5.099-31.901 11.999c-10.8 8.1-24 18.001-48.901 18.001-25.199 0-38.399-9.901-49.199-18.001-5.402-3.9-9.901-7.5-15.901-9.6.452 21.365 7.401 41.18 18.907 57.601z"
                  />
                </g>
              </svg>
              <span className="link-text">Comidas</span>
            </a>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="space-station-moon-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    className="fa-primary"
                    d="m467 185h-98.037c8.968-17.396 14.037-37.117 14.037-58 0-70.028-56.972-127-127-127s-127 56.972-127 127c0 20.883 5.069 40.604 14.037 58h-98.037c-24.813 0-45 20.187-45 45v237c0 14.867 7.252 28.068 18.399 36.266.285.227.585.425.883.628 7.296 5.102 16.16 8.106 25.718 8.106h422c9.555 0 18.417-3.002 25.712-8.101.3-.205.603-.405.89-.633 11.146-8.199 18.398-21.399 18.398-36.266v-237c0-24.813-20.187-45-45-45zm-437 282v-237c0-.94.098-1.857.264-2.75l154.404 120.072-154.304 122.924c-.232-1.046-.364-2.13-.364-3.246zm179.006-100.71 19.273 15.073c8.161 6.382 17.941 9.573 27.722 9.573s19.561-3.191 27.722-9.573l19.272-15.073 145.248 115.71h-384.486zm118.326-18.968 154.404-120.072c.166.893.264 1.81.264 2.75v237c0 1.116-.132 2.2-.364 3.246zm-71.332-317.322c53.486 0 97 43.514 97 97s-43.514 97-97 97-97-43.514-97-97 43.514-97 97-97zm0 224c35.897 0 68.359-14.974 91.479-39h101.14l-154.78 120.365-28.598 22.366c-5.441 4.256-13.041 4.255-18.482 0l-28.631-22.392-154.748-120.339h101.14c23.121 24.026 55.583 39 91.48 39z"
                  />
                  <path
                    fill="currentColor"
                    className="fa-secondary"
                    d="m256 191c8.284 0 15-6.716 15-15v-48c0-8.284-6.716-15-15-15s-15 6.716-15 15v48c0 8.284 6.716 15 15 15z"
                  />
                  <circle
                    fill="currentColor"
                    className="fa-secondary"
                    cx="256"
                    cy="80.001"
                    r="15"
                  />
                </g>
              </svg>
              <span className="link-text">Contacto</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="space-shuttle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
              >
                <g className="fa-group">
                  <circle
                    fill="currentColor"
                    className="fa-secondary"
                    cx="170.241"
                    cy="374.273"
                    r="50.176"
                  />
                  <path
                    fill="currentColor"
                    className="fa-secondary"
                    d="M316.673,324.098L316.673,324.098c-27.711,0-50.176,22.465-50.176,50.176s22.465,50.176,50.176,50.176
				c27.711,0,50.176-22.465,50.176-50.176S344.384,324.098,316.673,324.098z"
                  />
                  <path
                    fill="currentColor"
                    className="fa-primary"
                    d="M402.177,272.897H140.545l-5.12-29.696h215.04c6.326,0.019,12.017-3.843,14.336-9.728l51.2-129.024
				c3.111-7.892-0.766-16.812-8.658-19.922c-1.808-0.713-3.735-1.076-5.678-1.07H108.801L96.513,12.801
				c-1.262-7.471-7.784-12.906-15.36-12.8h-58.88c-8.483,0-15.36,6.877-15.36,15.36s6.877,15.36,15.36,15.36h46.08l44.032,260.096
				c1.262,7.471,7.784,12.906,15.36,12.8h274.432c8.483,0,15.36-6.877,15.36-15.36C417.537,279.774,410.66,272.897,402.177,272.897z
				"
                  />
                </g>
              </svg>
              <span className="link-text">Carrito</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 512 512"
                version="1.1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g className="fa-group">
                  <path className="fa-primary" fill="currentColor" d="M374.45 332.463c-.407-.044-59.344 1.695-68.107-61.463 9.737-6.794 18.711-15.614 26.617-26.316 15.38-20.82 25.29-46.938 28.82-75.189a11.457 11.457 0 002.893-4.071c6.387-15.215 9.626-31.461 9.626-48.289C374.299 52.547 325.578 0 265.688 0c-15.663 0-30.859 3.608-45.211 10.733a79.443 79.443 0 00-15.985 2.867c-24.597 7.107-44.613 25.344-56.362 51.354-11.406 25.254-13.654 54.983-6.328 83.712a134.862 134.862 0 005.85 17.731 11.459 11.459 0 002.705 3.938c5.718 44.095 26.699 80.63 55.307 100.577-8.79 63.265-67.706 61.509-68.112 61.553-42.382 1.438-76.425 36.341-76.425 79.067v88.941c0 6.367 5.161 11.528 11.528 11.528h366.691c6.366 0 11.529-5.161 11.529-11.528v-88.941c-.001-42.728-34.041-77.632-76.425-79.069zM210.893 35.751c4.207-1.216 8.65-1.937 13.206-2.142a11.517 11.517 0 004.843-1.311c11.671-6.132 24.035-9.241 36.747-9.241 47.174 0 85.554 42.203 85.554 94.078 0 1.557-.044 3.106-.112 4.649-9.15-9.292-21.863-15.067-35.902-15.067h-78.571c-4.675 0-9.112-1.468-12.833-4.246a21.482 21.482 0 01-7.1-9.216 14.062 14.062 0 00-13.972-8.814 14.15 14.15 0 00-12.816 10.579c-4.553 17.496-13.632 33.612-26.088 46.681-11.59-47.699 9.327-95.053 47.044-105.95zm-10.03 199.389c-15.001-18.326-24.825-43.073-27.939-70.166 14.547-12.965 26.047-29.099 33.534-46.995a44.952 44.952 0 003.575 2.97c7.736 5.773 16.942 8.826 26.626 8.826h78.571c11.117 0 20.699 6.668 24.975 16.211-.001.082-.013.16-.013.242 0 65.078-37.76 118.023-84.174 118.023-20.2.001-39.789-10.338-55.155-29.111zm26.489 47.093c9.139 3.307 18.752 5.076 28.666 5.076 9.835 0 19.444-1.712 28.643-5.015 4.221 21.991 16.448 41.158 33.527 54.353l-60.535 86.208c-.395.563-.944.848-1.632.848-.687 0-1.236-.286-1.63-.847l-60.55-86.228c17.08-13.21 29.303-32.391 33.511-54.395zm200.465 206.71H84.183V411.53c0-30.922 25.157-56.079 56.079-56.079.42 0 18.971-.451 33.629-7.112l61.629 87.766a25.072 25.072 0 0020.5 10.655h.001a25.073 25.073 0 0020.5-10.655l61.618-87.752c16.717 7.099 33.18 7.099 33.6 7.099 30.922 0 56.078 25.157 56.078 56.079v77.412z"></path>
                </g>
                </svg>
              <span className="link-text">Iniciar sesión</span>
            </Link>
          </li>

          <li className="nav-item" id="themeButton">
            <a href onClick={() => this.showContact()} className="nav-link">
              <div className="centered">
                <img src={logo} className="logoResp" height="80" alt="logo" />
              </div>
            </a>
          </li>
        </ul>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={(value) => this.closeContact(value)}
          TransitionComponent={this.Transition}
        >
          <AppBar position="static" className="appBar">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={(value) => this.closeContact(value)}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <br />
              <br />
              <br />
              <img src={logo} alt="Logo" className="logoResp" />
            </Toolbar>
          </AppBar>
          <DialogContent>
            <DialogContentText>
              <h3 style={{ color: "black" }}>
                ¿Quieres que diseñemos una web, sistema o aplicación para tu
                emprendimiento? ¡Nosotros te contactamos!
              </h3>
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Teléfono"
              type="tel"
              fullWidth
            />
            <br />
            <br />
            <Button variant="contained" color="primary" disableElevation>
              Enviar contacto
            </Button>
          </DialogContent>
        </Dialog>
      </nav>
    );
  }
}

export default Nav;
