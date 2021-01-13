import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

import { useSpring, animated } from "react-spring";
import classes from "./ParallaxBack.module.scss";
import Carousel3d from "./components/content/Carousel3d";

import Header from "./components/header/Header";

import LoginScreen from "./components/content/auth/LoginScreen";
import logout from "./components/content/auth/Logout";
import RegisterScreen from "./components/content/auth/RegisterScreen";
import ProfileScreen from "./components/content/auth/ProfileScreen";

import UserListScreen from "./components/content/admin/UserListScreen";
import UserEditScreen from "./components/content/admin/UserEditScreen";
import ProductListScreen from './components/content/admin/ProductListScreen'

import ProductsScreen from "./components/content/shop/ProductsScreen";
import ProductDetail from "./components/content/shop/ProductDetail";
import CartScreen from "./components/content/shop/CartScreen";
import ShippingScreen from "./components/content/shop/ShippingScreen";
import PaymentScreen from "./components/content/shop/PaymentScreen";
import PlaceOrderScreen from "./components/content/shop/PlaceOrderScreen";
import OrderScreen from "./components/content/shop/OrderScreen";

import Footer from "./components/footer/Footer";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${-x / 10}px,${-y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${-x / 8 + 35}px,${-y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${-x / 6 - 250}px,${-y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${-x / 3.5}px,${-y / 3.5}px,0)`;

const App = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <Router>
      <div className="App">
        <div
          className={classes.container}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <animated.div
            className={classes.card1}
            style={{ transform: props.xy.interpolate(trans1) }}
          />
          <animated.div
            className={classes.card2}
            style={{ transform: props.xy.interpolate(trans2) }}
          />
          <animated.div
            className={classes.card3}
            style={{ transform: props.xy.interpolate(trans3) }}
          />
          <div className="container">
            <header className="header">
              <Header />
            </header>
            <main className="main">
              <Route exact path="/" component={Carousel3d} />
              <Route path="/products" component={ProductsScreen} />
              <Route path="/product/:id" component={ProductDetail} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/shipping" component={ShippingScreen} />
              <Route path="/payment" component={PaymentScreen} />
              <Route path="/placeorder" component={PlaceOrderScreen} />
              <Route path="/order/:id" component={OrderScreen} />
              <Route path="/login" component={LoginScreen} />
              <Route path="/logout" component={logout} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/profile" component={ProfileScreen} />
              <Route path="/admin/userlist" component={UserListScreen} />
              <Route path="/admin/user/:id/edit" component={UserEditScreen} />
              <Route path='/admin/productlist' component={ProductListScreen} />
            </main>
            <footer className="footer">
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
