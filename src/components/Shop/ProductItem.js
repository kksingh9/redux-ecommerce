import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { addCartItemSliceActions } from "../../store/AddToCart";
import { useDispatch } from "react-redux";
//import { useEffect } from "react";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  //const cartItem = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();
  const addProductHandler = () => {
    dispatch(
      addCartItemSliceActions.onAddCartItem({
        id: id,
        price: price,
        title: title,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addProductHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
