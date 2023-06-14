import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {

  const cartData = useSelector((state)=>state.cartData);
  let amount = cartData.length && cartData.map(item=>item.price).reduce((prev, next)=> prev+next)
  console.log(amount);
  console.log(cartData);
  return (
    <div>
      <Link to="/">
            Product List
      </Link>
      <h1>Cart</h1>
      <div className='cart-page-container'>
        <table>
          <thead>
            <td>Name</td>
            <td>Prise</td>
            <td>Category</td>
          </thead>
          {
            cartData.map((item)=> <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
          </tr>)
          }
        </table>
        <div className='price-details'>
          <div className='adjust-price'><span>Amount</span><span>{amount}</span></div>
          <div className='adjust-price'><span>Discount</span><span>{amount/10}</span></div>
          <div className='adjust-price'><span>Total</span><span>{amount-(amount/10)}</span></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
