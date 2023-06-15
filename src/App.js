import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./components/authentication";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import UserAccessPage from "./pages/UserAccessPage";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import User from "./pages/User";
import CreateUser from "./pages/CreateUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import CreateProduct from "./pages/CreateProduct";
import Main from "./pages/Main";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        {/* <Sidebar2 /> */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/sidebar" component={Main} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/user/create" component={CreateUser} />
          <Route exact path="/user/:userId" component={User} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/user/access/:action" component={UserAccessPage} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/product/create" component={CreateProduct} />
          <Route exact path="/product/:productId" component={Product} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
