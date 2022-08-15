import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { makeServer } from "./mirage/server";
import { store } from "./redux/store/store";

if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "production") {
  makeServer({ environment: "development" });
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
