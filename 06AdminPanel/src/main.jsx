import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import { theme } from "./theme/index.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Transaction from "./pages/Transaction/Transaction.jsx";
import Support from "./pages/Support/Support.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Transaction",
    element: <Transaction />,
  },
  {
    path: "/Support",
    element: <Support />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
