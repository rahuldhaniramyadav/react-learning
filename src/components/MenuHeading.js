import { useState } from "react";
import ItemCategory from "./ItemCategory";

const MenuHeading = ({data}) => {

  console.log(data);

  const [showItems, setShowItems] = useState(false);

  const showItemCategory = () => {
    setShowItems(!showItems);
  }
  // console.log(category);
  return(
    <div>
        {/* {category.map((cat) => */}
          <div key={data?.title} className="cursor-pointer w-6/12 text-center mx-auto p-4 m-4 shadow-lg">
            <div className="flex justify-between" onClick={showItemCategory}>
              <h1>{data?.title} ({data?.itemCards.length})</h1>
              {showItems ? <span>▲</span> : <span>▼</span>}
            </div>
            {showItems && <ItemCategory itemCategory={data?.itemCards} /> }
          </div>
        {/* )} */}
    </div>
  )
}

export default MenuHeading;