import ReastaurantCard from "./ReastaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          // if dont have key then use index as key
          // not using keys is not accptable <<<<<<< using index keys <<<<<<< using unique id as keys
          <ReastaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
        {/* <ReastaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};
export default Body;
