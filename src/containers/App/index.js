import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Donors from "../Donors";
import Donor from "../Donor";
import Studies from "../Studies";
import Study from "../Study";



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Studies} exact />
        <Route path="/studies" component={Studies} exact />
        <Route path="/study/:slug" component={Study} exact />
        <Route path="/donors" component={Donors} exact />
        <Route path="/donor/:slug" component={Donor} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
