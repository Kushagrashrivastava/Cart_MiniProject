import { addToCart, removeFromCart, emptyCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.productData);
  console.log("data in main component form saga", data);

useEffect(()=>{
  dispatch(productList())
},[])

  return (
    <>
    <div>
     <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
    </div>
    <div>
     <button onClick={() => dispatch(productList())}>Get Product List</button>
    </div>
    <div className='product-container'>
      {
        data.map((item)=><div key={item.id} className='product-item'>
          <img src={item.image} alt=''/>
          <div>category : {item.category}</div>
          <div>Name : {item.title}</div>
          <div>Price : {item.price}</div>
          <div>Description : {item.description}</div>
          <div>Rating : {item.rating.rate}</div>
          <div>
            <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove From Cart</button>
            </div>
        </div>)
      }
    </div>
    </>
  );
}

export default Main;