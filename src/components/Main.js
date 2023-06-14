import { addToCart, removeFromCart, emptyCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.productData);
  console.log("data in main component", data)
  const product ={
    name:'I Phone',
    type:'mobile',
    price:10000,
    color:'red'
  }
  return (
    <>
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
    <div>
    <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from cart</button>
    </div>
    <div>
     <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
    </div>
    <div>
     <button onClick={() => dispatch(productList())}>Get Product List</button>
    </div>
    </>
  );
}

export default Main;