import "./Nav.scss";
import React from "react";

class Nav extends React.Component {
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
            <a href="#home" className="nav-link">
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
            </a>
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
            <a href="#contacto" className="nav-link">
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
            </a>
          </li>

          <li className="nav-item">
            <a href="#cart" className="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="space-shuttle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
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
            </a>
          </li>

          <li className="nav-item">
            <a href="#login" className="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="space-shuttle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    className="fa-secondary"
                    d="M452,0H60C26.916,0,0,26.916,0,60v80h40V60c0-11.028,8.972-20,20-20h392c11.028,0,20,8.972,20,20v392
			c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20v-80H0v80c0,33.084,26.916,60,60,60h392c33.084,0,60-26.916,60-60V60
			C512,26.916,485.084,0,452,0z"
                  />
                  <polygon
                    className="fa-primary"
                    fill="currentColor"
                    points="240,131.716 211.716,160 287.716,236 0,236 0,276 287.716,276 211.716,352 240,380.284 364.284,256"
                  />
                </g>
              </svg>
              <span className="link-text">Iniciar sesión</span>
            </a>
          </li>

          <li className="nav-item" id="themeButton">
            <a href="#theme" className="nav-link">
              <svg
                id="lightIcon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="moon-stars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
              <svg
                id="solarIcon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="sun"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-sun fa-w-16 fa-7x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
              <svg
                id="darkIcon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="sunglasses"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="svg-inline--fa fa-sunglasses fa-w-18 fa-7x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
              <span className="link-text">Temas</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
