import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppStore from './app/mobx';
import StoreContext from './contexts/StoreContext';

const root = createRoot(document.getElementById('root') as HTMLElement);

const mobxStore = new AppStore();

root.render(
    <StoreContext.Provider value={mobxStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreContext.Provider>
);
