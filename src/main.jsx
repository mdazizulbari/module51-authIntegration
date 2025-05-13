import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layouts/Root.jsx";
import Home from "./components/Home.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import { AuthContext } from "./context/AuthContext.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Orders from "./components/Orders.jsx";
import Profile from "./components/Profile.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";

// export const AuthContext = createContext(null);
// const userInfo = { email: "poteto@alu.com" };

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: `signIn`, Component: SignIn },
      { path: `signUp`, Component: SignUp },
      {
        path: `orders`,
        // Component: Orders,
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      { path: `profile`, Component: Profile },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
