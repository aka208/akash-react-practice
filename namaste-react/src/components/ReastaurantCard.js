import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const ReastaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData;
  return (
    <div className="m-4 p-4 w-[250px] min-h-[500px] rounded-lg bg-slate-200 hover:bg-slate-300">
      <img
        className="rounded-lg"
        alt="food image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString} minutes</h4>
    </div>
  );
};

// Higher Order Component

// Input - RestaurantCard Output - RestaurantCardPromoted

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-yellow-50 font-sans font-semibold shadow-xl m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export const WithNotRecommendedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 text-yellow-50 font-sans font-semibold bg-red-500 shadow-xl rounded-lg">
          Not Recommended
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default ReastaurantCard;
