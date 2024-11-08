import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "@/pages/landing-page/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <LandingPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
