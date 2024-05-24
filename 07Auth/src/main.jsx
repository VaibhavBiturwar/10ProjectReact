import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { theme } from "./theme/theme.js";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import {
  Signin,
  Signup,
  ForgotPassword,
  ResetPassword,
  ResetSent,
  ResetSuccess,
  VerifyEmail,
  VerifySuccess,
  Dashboard,
  VideosHome,
  TweetsHome,
  ProfileHome,
} from "./pages";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { PrivateRoute, PublicRoute } from "./components";

const router = createBrowserRouter([
  // Auth
  {
    path: "/signin",
    element: (
      <PublicRoute>
        <Signin />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    ),
  },
  {
    path: "/forgotPassword",
    element: (
      <PublicRoute>
        <ForgotPassword />
      </PublicRoute>
    ),
  },
  {
    path: "/verifyEmail",
    element: (
      <PublicRoute>
        <VerifyEmail />
      </PublicRoute>
    ),
  },
  {
    path: "/verifySuccess",
    element: (
      <PublicRoute>
        <VerifySuccess />
      </PublicRoute>
    ),
  },
  {
    path: "/resetSent",
    element: (
      <PublicRoute>
        <ResetSent />
      </PublicRoute>
    ),
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/resetSuccess",
    element: <ResetSuccess />,
  },
  // Dashboard
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/videosHome",
    element: (
      <PrivateRoute>
        <VideosHome />
      </PrivateRoute>
    ),
  },
  {
    path: "/tweetsHome",
    element: (
      <PrivateRoute>
        <TweetsHome />
      </PrivateRoute>
    ),
  },
  {
    path: "/profileHome",
    element: (
      <PrivateRoute>
        <ProfileHome />
      </PrivateRoute>
    ),
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
          </PersistGate>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
