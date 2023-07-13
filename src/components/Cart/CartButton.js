import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../../store/cart';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const onShowCartHandler = () => {
      dispatch(cartSliceActions.onShowCart());
  }
  return (
    <button className={classes.button} onClick={onShowCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;