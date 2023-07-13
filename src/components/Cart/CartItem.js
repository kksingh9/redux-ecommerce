import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { addCartItemSliceActions } from '../../store/AddToCart';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  //const items = useSelector(state => state.cartItem.items)
  const dispatch = useDispatch();
  const increaseItemHandler = () => {
     dispatch(addCartItemSliceActions.onAddCartItem({
      id,
      title,
      quantity,
      price,
     }))
  }
  const decreaseItemHandler = () => {
        dispatch(addCartItemSliceActions.onRemoveCartItem(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseItemHandler}>-</button>
          <button onClick={increaseItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;