import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

import Root from './Root';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/store/configureStore';

// const store = configureStore();

// const root = ReactDOM.render(<Root store={store} />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
