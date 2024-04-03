import ReastaurantCard, { WithPromotedLabel } from "./ReastaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = WithPromotedLabel(ReastaurantCard);

  console.log("Body Rendered");

  console.log("List of Restaurants ", listOfRestaurants);

  // called after our component renders or render cycle completes
  // If no dependency array then useEffect is called on every render
  // If dependency array is empty then useEffect is called on initial render only and just once
  // If dependency array has a item then useEffect is called every time item gets updated
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5967587&lng=73.896851&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Optional Chaining
    setListOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }

  // Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  // setListOfRestaurants(listOfRestaurants);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredList = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              // filter logic here
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
              console.log(listOfRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          // if dont have key then use index as key
          // not using keys is not accptable <<<<<<< using index keys <<<<<<< using unique id as keys
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* // if a restaurant rating is more than 3 make it promoted */}
            {restaurant.info.avgRating > 3 ? (
              <RestaurantCardPromoted resData={restaurant.info} />
            ) : (
              <ReastaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
        {/* <ReastaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};
export default Body;
