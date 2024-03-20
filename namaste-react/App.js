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
  - Restro Card
Footer
- Copyright
- Links
- Address
- Contact
 */
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

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container"></div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout />);
