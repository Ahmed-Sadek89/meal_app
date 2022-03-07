import {render} from 'react-dom';
//import { lazy, Suspense } from 'react';
import './Styles/Css/Index.css';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
//import Loading from './General/Loading/Loading';
import App from './App';
//const App = lazy(() => import('./App'));

render(
        <Provider store={Store}>
            <App />
        </Provider>,
    document.getElementById('root')
)
