import { useDispatch, useSelector } from "react-redux";
import {CDN_IMAGE} from "../utilis/constant";
import ItemCategory from "./ItemCategory";
import {emptyCart, removeItem} from "../utilis/redux/CartReducers";

const Cart = () => {

  const cartItems = useSelector((store) => store.ourcart.items);

  console.log(cartItems);

  const dispatch = useDispatch();

  const emptyCartItems = () => {
    dispatch(emptyCart());
  }

  const removeProductCart = (item) => {
    dispatch(removeItem(item));
  }

  return(
    <div className="text-center w-6/12 mx-auto">
      <h1> Cart ITEMS </h1>
      {cartItems.length === 0 && <h1> There is no items in in cart Add items to cart</h1>}
      <button onClick={emptyCartItems}>Empty Cart</button>
      {/* reused the component but here we need to modify the item count to handle the duplicate error and also want to show remove button */}
      {/* <ItemCategory itemCategory={cartItems} />  */}
      {cartItems.map((itemCat) => 
        <div key={itemCat?.card?.info?.id} className="border-b-1 my-4 border-b-green-200 flex justify-between">
          <div className="w-9/12">
            <span className="py-1 my-1 font-bold">{itemCat?.card?.info?.name}</span>
            <span> - ₹ {itemCat?.card?.info?.price ? itemCat?.card?.info?.price / 100 : itemCat?.card?.info?.defaultPrice / 100}/-</span>
            <p className="py-1 my-1">Desc: {itemCat?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <button className="absolute p-2 bg-amber-100 border-2 border-gray-200 mx-auto" onClick={() => removeProductCart(itemCat)}>Remove item</button>
            <img src={CDN_IMAGE + itemCat?.card?.info?.imageId} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;