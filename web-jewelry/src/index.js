import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {AppRouter} from "./router/AppRouter";
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthProvider} from "./auth/context/AuthProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <AuthProvider>
              <AppRouter/>
          </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
