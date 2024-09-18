import { useState } from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TransactionPage from "./Pages/Dashboard/Transaction/TransactionPage";
import Support from "./Pages/Dashboard/Transaction/Support/Support";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transaction",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
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
