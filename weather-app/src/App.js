import React from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import { store } from "./State/store";
import HomePage from "./Pages/HomePage";
import "./App.scss";
import Layout from "./Components/Shared/Layout";
function App() {
  return (
    <Provider store={store}>
      <Layout>
        <HomePage></HomePage>
      </Layout>
    </Provider>
  );
}

export default App;
