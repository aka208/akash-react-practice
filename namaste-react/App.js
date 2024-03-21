import React from "react";
import ReactDOM from "react-dom/client";

// //React Element
// const elem = <span>React Element</span>;

// const title = (
//   <h1 className="head" tabIndex="2">
//     {/* React element inside another React element */}
//     Namaste React Normal {elem}
//   </h1>
// );
// //JSX
// const Title = () => (
//   <h1 className="head" tabIndex="1">
//     Namaste React using JSX🚀
//   </h1>
// );
// //Functional Component with return
// const HeadingComponent = () => {
//   return <h1 className="heading">Namaste React Functional Component!!</h1>;
// };
// //Functional Component without return
// const HeadingComponent2 = () => (
//   <div id="container">
//     {/* call component like a normal function */}
//     {Title()}
//     {/* without closing tag */}
//     <Title />
//     {/* with closing tag */}
//     <Title></Title>
//     {/* React Element inside a component  */}
//     {title}
//     <h1 className="heading">Namaste React Functional Component!!</h1>
//   </div>
// );

/** 
Header
-Logo
-Nav Items
Body
- Search Input
- Search
- Reastaurant Container
  - ReastaurantCard
    - image
    - name of res, star rating, cuisine, delivery time
Footer
- Copyright
- Links
- Address
- Contact
 */
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Namaste Food App Logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ReastaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="food image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} For Two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    type: "reastaurant",
    data: {
      id: 1,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 2,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 3,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 4,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 5,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 6,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 7,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 8,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 9,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 10,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 11,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 12,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 13,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 14,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 15,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 16,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 17,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 18,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 19,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    type: "reastaurant",
    data: {
      id: 20,
      name: "KFC",
      cuisines: ["Burger", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      avgRating: 4.4,
      deliveryTime: 27,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          // if dont have key then use index as key
          // not using keys is not accptable <<<<<<< using index keys <<<<<<< using unique id as keys
          <ReastaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
        {/* <ReastaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout />);
