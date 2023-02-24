import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Home from "../Home";
import Research from "../Research";
// import Team from "../Team";
// import Publications from "../Publications";
// import Blog from "../Blog";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/research" component={Research} exact />
        <Route path="/team" component={Home} exact />
        <Route path="/publications" component={Home} exact />
      </Switch>
      <Footer />
      <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
    </div>
  );
}

export default App;
