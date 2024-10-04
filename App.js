import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./src/components/about";
import Error from "./src/components/Error";
import Shimmer from "./src/Shimmer";
import RestroInfo from "./src/components/RestroInfo";
import UserContext from "./src/components/UserContext";
import { Provider } from "react-redux";
import appStore from "./util/appStore";
import Cart from "./src/components/Cart";
import Contact from "./src/components/Contact";

const About = lazy(() => import("./src/components/about"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Fazil");
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ logginuser: userName, setUserName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restro/:id",
        element: <RestroInfo />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
