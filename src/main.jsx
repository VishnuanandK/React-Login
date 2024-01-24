import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="843313311243-v43co4jbbe01pk7mrssubrlqh2ld21si.apps.googleusercontent.com">    <App />
</GoogleOAuthProvider>
  </React.StrictMode>,
)
