import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosReturnLeft } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { GiEmptyMetalBucketHandle } from "react-icons/gi";
import classes from "./CartScreen.module.scss";
import Meta from "../../Meta";
import { addToCart, removeFromCart } from "../../../actions/cartActions";

const CartScreen = ({ match, history, location }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const goBackHandler = () => {
    history.goBack();
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <div className={classes.container}>
      <Meta title={"LineShop | My Cart"} />
      <div className={classes.cart}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className={classes.items}>
            <div className={classes.empty}>
              <h4>Your cart is empty</h4>
              <button onClick={() => goBackHandler()}>Go Back</button>
            </div>
          </div>
        ) : (
          <div className={classes.items}>
            <div className={classes.list}>
              {cartItems.map((item) => (
                <div className={classes.item} key={item.product}>
                  <img src={item.image} alt={item.name} />
                  <h3>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </h3>
                  <p>{item.price} €</p>
                  <div className={classes.qty}>
                    <div className={classes.select}>
                      <select
                        disabled={item.countInStock === 0}
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                      <span className="focus"></span>
                    </div>
                  </div>
                  <GiEmptyMetalBucketHandle
                    onClick={() => removeFromCartHandler(item.product)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={classes.checkout}>
        <div>
          <h3>Subtotal </h3>
        </div>

        <div style={{ padding: "0 20%" }}>
          <p>Items :</p>
          <p>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</p>
        </div>
        <div style={{ padding: "0 20%" }}>
          <p>Price :</p>
          <p>
            {new Intl.NumberFormat().format(
              cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)
            )}{" "}
            €
          </p>
        </div>
        <div>
          <button disabled={cartItems.length === 0} onClick={checkoutHandler}>
            Proceed to Checkout
          </button>
        </div>
      </div>
      <div className={classes.shopping}>
        <Link to="/products">
          <IoIosReturnLeft />
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default CartScreen;
