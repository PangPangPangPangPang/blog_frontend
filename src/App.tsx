/**
 * Created by Max on 02/03/2017.
 */
import React from "react";
import { Provider } from "react-redux";
import { Router } from "@reach/router";
import Navigator from "./container/navigator";
import About from "./container/about/about";
import Home from "./container/home_page/home";
import List from "./container/list/list";
import Tag from "./container/tag/tag";
import Article from "./container/article/article";
import "./App.css";
import store from "./utils/config";

function App() {
  return (
    <Provider store={store()}>
      <Router>
        <Navigator path="/">
          <Home default path="home"/>
          <Tag path="tag" />
          <List path="list"/>
          <Article path="list/(:id)" />
          <About path="about" />
        </Navigator>
      </Router>
    </Provider>
  );
}

export default App;
