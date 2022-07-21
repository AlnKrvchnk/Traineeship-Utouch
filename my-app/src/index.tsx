import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from './app/store'
import AppContext from './contexts/AppContext';
import AppStore from './app/mobx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const mobxStore =new AppStore()

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
//     <AppContext.Provider>
// <BrowserRouter>
//             <App />
//         </BrowserRouter>
// </AppContext>
);
