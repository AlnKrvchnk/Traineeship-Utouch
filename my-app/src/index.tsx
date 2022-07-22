import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import {Provider} from "react-redux";
// import store from './app/store'
import StoreContext from './contexts/StoreContext';
import AppStore from './app/mobx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const mobxStore =new AppStore()

root.render(
    // <Provider store={store}>
    //     <BrowserRouter>
    //         <App />
    //     </BrowserRouter>
    // </Provider>

    <StoreContext.Provider value={mobxStore}>
      <BrowserRouter>
            <App />
        </BrowserRouter>
</StoreContext.Provider>
);
