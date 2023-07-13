import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartSliceActions } from '../../store/cart';

const CartButton = (props) => {
  const quantity = useSelector(state => state.cartItem.totalQuantity)
  const dispatch = useDispatch();
 
  const onShowCartHandler = () => {
      dispatch(cartSliceActions.onShowCart());
  }
  return (
    <button className={classes.button} onClick={onShowCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;