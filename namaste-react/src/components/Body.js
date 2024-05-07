import ReastaurantCard, {
  WithPromotedLabel,
  WithNotRecommendedLabel,
} from "./ReastaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = WithPromotedLabel(ReastaurantCard);
  const RestaurantCardNotPromoted = WithNotRecommendedLabel(ReastaurantCard);

  // called after our component renders or render cycle completes
  // If no dependency array then useEffect is called on every render
  // If dependency array is empty then useEffect is called on initial render only and just once
  // If dependency array has a item then useEffect is called every time item gets updated
  useEffect(() => {
    fetchData();
    // fetchUpdatedData();
  }, []);

  const { loggedInUser, setUserName } = useContext(UserContext);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5967587&lng=73.896851&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Optional Chaining
    setListOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const fetchUpdatedData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/update",
      {
        method: "post",
        headers: {
          Cookie:
            "__SW=Bq-uXk6WbbGOa5WZU75nxorEJrWLU0K1; _device_id=c5379888-9e48-f04b-818e-23aa19bb2543; fontsLoaded=1; _gcl_au=1.1.842079248.1710957904; _ga_4BQKMMC7Y9=GS1.2.1711777522.3.1.1711782176.47.0.0; _guest_tid=65af1e05-fcc8-400a-9505-3e11569ace8f; _sid=d9wda021-c19d-4eca-929f-67425413c6a9; userLocation={%22lat%22:18.6405385%2C%22lng%22:73.90364869999999%2C%22address%22:%22PathareMala%2C%20Charholi%20Budruk%2C%20Maharashtra%20412105%2C%20India%22%2C%22area%22:%22%22%2C%22showUserDefaultAddressHint%22:false}; _gid=GA1.2.1972800345.1713105310; _ga_34JYJ0BCRN=GS1.1.1713105310.17.0.1713105310.0.0.0; _ga=GA1.1.484451253.1710957904",
        },
        body: {
          lat: 18.6405385,
          lng: 73.90364869999999,
          nextOffset: "COVCELQ4KICIw+Kymoj7IDCnEzgE",
          widgetOffset: {
            NewListingView_category_bar_chicletranking_TwoRows: "",
            NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
            Restaurant_Group_WebView_PB_Theme: "",
            Restaurant_Group_WebView_SEO_PB_Theme: "",
            collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "25",
            inlineFacetFilter: "",
            restaurantCountWidget: "",
          },
          filters: {},
          seoParams: {
            seoUrl: "https://www.swiggy.com/",
            pageType: "FOOD_HOMEPAGE",
            apiName: "FoodHomePage",
          },
          page_type: "DESKTOP_WEB_LISTING",
          _csrf: "zAS54DrdtTiQ-q7DCU-5v5ZFwyIuZ7vL_1WROcOw",
        },
      }
    );
    const json = await data.json;
    // setListOfRestaurants([...listOfRestaurants, ...listOfRestaurants]);
    console.log("UPDATED DATE", json);
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
            data-testid="search-input"
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
        <div className="search m-4 p-4 flex items-center">
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
        <div className="search m-4 p-4 flex items-center">
          <label>User Name: </label>
          <input
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
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
            {restaurant.info.avgRating > 4 ? (
              <RestaurantCardPromoted resData={restaurant.info} />
            ) : (
              <RestaurantCardNotPromoted
                resData={restaurant.info}
              ></RestaurantCardNotPromoted>
            )}
          </Link>
        ))}
        {/* <ReastaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};
export default Body;
