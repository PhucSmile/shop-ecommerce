import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import GlobalStyles from './component/GlobalStyle/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/Store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                {/* toastify */}
                <ToastContainer theme="dark" position="top-right" autoClose={2000} closeOnClick pauseOnHover={false} />

                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </Provider>
        </Router>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
