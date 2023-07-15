import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import { cartSliceActions } from "./store/cart";

import { useState } from "react";
//let isInitial = true;

function App() {
  const show = useSelector((state) => state.cart.showCart);
  const notification = useSelector((state) => state.cart.notification);
  const cartItem = useSelector((state) => state.cartItem);
  const [initial, setInitial] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const sendData = async () => {
      dispatch(
        cartSliceActions.showNotification({
          status: "pending",
          title: "sending...",
          message: "sending cart data!",
        })
      );
      const response = await fetch(
        "https://cart-demo-56da0-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItem),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
      dispatch(
        cartSliceActions.showNotification({
          status: "success",
          title: "success!",
          message: "sending cart data success!",
        })
      );
    };
    if (initial) {
      setInitial(false);
      return;
    }
    sendData().catch((error) => {
      dispatch(
        cartSliceActions.showNotification({
          status: "error",
          title: "Error!",
          message: "sending cart data failed!",
        })
      );
    });
  }, [cartItem,dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
