import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import { useSpring, animated } from 'react-spring';
import classes from './ParallaxBack.module.scss';

import Header from './components/header/Header';

import Carousel3d from './components/content/Carousel3d';
import ProductGallery from './components/content/ProductGallery';

import LoginScreen from './components/content/auth/LoginScreen';
import logout from './components/content/auth/Logout';
import RegisterScreen from './components/content/auth/RegisterScreen';
import ProfileScreen from './components/content/auth/ProfileScreen';

import UserListScreen from './components/content/admin/UserListScreen';
import UserEditScreen from './components/content/admin/UserEditScreen';
import ProductListScreen from './components/content/admin/ProductListScreen';
import ProductEditScreen from './components/content/admin/ProductEditScreen';
import OrderListScreen from './components/content/admin/OrderListScreen';

import ProductsScreen from './components/content/shop/ProductsScreen';
import ProductDetail from './components/content/shop/ProductDetail';
import CartScreen from './components/content/shop/CartScreen';
import ShippingScreen from './components/content/shop/ShippingScreen';
import PaymentScreen from './components/content/shop/PaymentScreen';
import PlaceOrderScreen from './components/content/shop/PlaceOrderScreen';
import OrderScreen from './components/content/shop/OrderScreen';

import Footer from './components/footer/Footer';
import ErrorComponent from './components/ErrorComponent';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${-x / 8 + 35}px,${-y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${-x / 6 - 250}px,${-y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

const App = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const stars = [1, 2, 4, 5];
  return (
    <Router>
      <div className="App">
        <div
          className={classes.container}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          {/* <animated.div
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
          /> */}
          <div className={classes.night}>
            {stars.map((star, i) => {
              return <div key={i} className={classes.shootingStar}></div>;
            })}
          </div>
          <div className="container">
            <header className="header">
              <Header />
            </header>
            <main className="main">
              <Switch>
                <Route exact path="/" component={Carousel3d} />
                <Route exact path="/gallery" component={ProductGallery} />
                <Route
                  exact
                  path="/products/page/:pageNumber"
                  component={ProductsScreen}
                />
                <Route exact path="/products" component={ProductsScreen} />
                <Route
                  exact
                  path="/products/search/:keyword"
                  component={ProductsScreen}
                />
                <Route
                  exact
                  path="/products/search/:keyword/page/:pageNumber"
                  component={ProductsScreen}
                />
                <Route exact path="/product/:id" component={ProductDetail} />
                <Route exact path="/cart/:id?" component={CartScreen} />
                <Route exact path="/shipping" component={ShippingScreen} />
                <Route exact path="/payment" component={PaymentScreen} />
                <Route exact path="/placeorder" component={PlaceOrderScreen} />
                <Route exact path="/order/:id" component={OrderScreen} />
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/logout" component={logout} />
                <Route exact path="/register" component={RegisterScreen} />
                <Route exact path="/profile" component={ProfileScreen} />
                <Route
                  exact
                  path="/admin/userlist"
                  component={UserListScreen}
                />
                <Route
                  exact
                  path="/admin/user/:id/edit"
                  component={UserEditScreen}
                />
                <Route
                  exact
                  path="/admin/productlist"
                  component={ProductListScreen}
                />
                <Route
                  exact
                  path="/admin/productlist/:pageNumber"
                  component={ProductListScreen}
                />
                <Route
                  exact
                  path="/admin/product/:id/edit"
                  component={ProductEditScreen}
                />
                <Route
                  exact
                  path="/admin/orderlist"
                  component={OrderListScreen}
                />
                <Route
                  render={(props) => (
                    <ErrorComponent
                      {...props}
                      err="The page you are looking for does not exists ..."
                    />
                  )}
                />
              </Switch>
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
