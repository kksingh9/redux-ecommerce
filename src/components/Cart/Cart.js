import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { addCartItemSliceActions } from "../../store/AddToCart";
import { cartSliceActions } from "../../store/cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Cart = (props) => {
  const items = useSelector((state) => state.cartItem.items);

  console.log(items);
  const dispatch = useDispatch();
  //const [fetchedData, setfetchedData] = useState([]);
  useEffect(() => {
    //const setinterval = setInterval(() => {
    (async () => {
      dispatch(
        cartSliceActions.showNotification({
          status: "pending",
          title: "sending...",
          message: "sending cart data!",
        })
      );
      const response = await fetch(
        "https://cart-demo-56da0-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      dispatch(addCartItemSliceActions.replaceCartItem(data));
      dispatch(
        cartSliceActions.showNotification({
          status: "success",
          title: "success!",
          message: "sending cart data success!",
        })
      );
    })().catch((error) => {
      dispatch(
        cartSliceActions.showNotification({
          status: "error",
          title: "Error!",
          message: "sending cart data failed!",
        })
      );
    });
    // }, 3000)
    // return () => clearInterval(setinterval);
  }, [dispatch]);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              price: item.price,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
