import { addToCart } from '../redux/action';
import { useDispatch } from 'react-redux';

function Main() {
  const dispatch = useDispatch();
  const product ={
    name:'I Phone',
    type:'mobile',
    price:10000,
    color:'red'
  }
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
}

export default Main;