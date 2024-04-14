import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocerry from "./components/Grocerry";

// Chunking or Code Splitting or Dynamic Bundling or Lazy Loading or On Demand Loading
const Grocerry = lazy(() => import("./components/Grocerry"));

const About = lazy(() => import("./components/About"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = { name: "Akash Singh" };
    setUserName(data.name);
  }, []);
  return (
    // <div className="app">
    //   <Header />
    //   <Outlet />
    // </div>

    // <div className="app">
    //   <UserContext.Provider value={{ loggedInUser: userName }}>
    //     <Header />
    //   </UserContext.Provider>
    //   <Outlet />
    // </div>
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/Grocerry",
        element: (
          // fallback is used to show something till lazy component gets loaded
          <Suspense fallback={<Shimmer />}>
            <Grocerry />
          </Suspense>
        ),
      },
      // /:resId resId is dynamic
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<RouterProvider router={appRouter} />);
