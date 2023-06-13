import { useSelector } from "react-redux"; 

const Header = () => {
    const result = useSelector((state)=>state.cartData)
    console.log("redux data in header",result)
    return (
        <div className="header">
            <div className="cart-div">
                <span>{result.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/3081/3081986.png" alt="" />
            </div>
        </div>
    )
}

export default Header;