import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);
    
  return (
    <div className="text-center p-10 m-10">
      <h1 className="text-lg font-bold">Cart</h1>
      <div className="w-6/12 m-auto p-5">
      
      </div>
    </div>
  );
};

export default Cart
