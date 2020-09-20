import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app'
import 'firebase/analytics'
import Home from './views/Home/Home'
import {Provider} from 'react-redux';
import store from './redux/store'

var firebaseConfig = {
  apiKey: "AIzaSyB0rKKiBV9z84wUrzoEqGL1nB3gfAM0u48",
  authDomain: "croppy-11355.firebaseapp.com",
  databaseURL: "https://croppy-11355.firebaseio.com",
  projectId: "croppy-11355",
  storageBucket: "croppy-11355.appspot.com",
  messagingSenderId: "654649561601",
  appId: "1:654649561601:web:143a43700ba7d4f16a6600",
  measurementId: "G-Z1JSH0ZD3R"
};



firebase.initializeApp(firebaseConfig);
firebase.analytics();

const Application = () => (<Provider store={store}>
  <Home />
</Provider>);

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
