import { useDispatch } from "react-redux";
import { CDN_IMAGE } from "../utilis/constant";
import { addItem } from "../utilis/redux/CartReducers";

const ItemCategory = ({itemCategory}) => {
  const dispatch = useDispatch();

  const addProductCart = (item) => {
    dispatch(addItem(item));
  }
  return (
    <div className="text-left">
      {itemCategory.map((itemCat) => 
        <div key={itemCat?.card?.info?.id} className="border-b-1 my-4 border-b-green-200 flex justify-between">
          <div className="w-9/12">
            <span className="py-1 my-1 font-bold">{itemCat?.card?.info?.name}</span>
            <span> - ₹ {itemCat?.card?.info?.price ? itemCat?.card?.info?.price / 100 : itemCat?.card?.info?.defaultPrice / 100}/-</span>
            <p className="py-1 my-1">Desc: {itemCat?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <button className="absolute p-2 bg-amber-100 border-2 border-gray-200 mx-auto" onClick={() => addProductCart(itemCat)}>Add</button>
            <img src={CDN_IMAGE + itemCat?.card?.info?.imageId} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemCategory;