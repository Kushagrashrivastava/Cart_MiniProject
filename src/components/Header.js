import { useSelector, useDispatch } from "react-redux"; 
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";

const Header = () => {
    const result = useSelector((state)=>state.cartData)
    const dispatch = useDispatch();
    console.log("redux data in header",result)
    return (
        <div className="header">
            <Link to="/">
                <h1 className="logo">E-comm</h1>
            </Link>
            <div className="search-box">
                <input type="text" onChange={(event)=>dispatch(productSearch(event.target.value))} placeholder="search Product" />
            </div>
            <Link to="/cart">
            <div className="cart-div">
                <span>{result.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/3081/3081986.png" alt="" />
            </div>
            </Link>
        </div>
    )
}

export default Header;