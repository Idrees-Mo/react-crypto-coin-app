import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Coins from "./pages/Coins";
import CoinDetail from "./pages/CoinDetail";
import Error from "./pages/Error";

// Main routes for the application
const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "coins", element: <Coins /> },
      { path: "coins/:coinId", element: <CoinDetail /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
