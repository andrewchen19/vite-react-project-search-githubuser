import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// Redux Toolkit
import { store } from "./store";
import { Provider } from "react-redux";

// auth
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-d7smpz0biqtd2e4l.us.auth0.com"
      clientId="QMUWNxxYNYb98FEjzEekgVTjYWFAwope"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <App />
        <ToastContainer position="top-center" autoClose={2000} />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
