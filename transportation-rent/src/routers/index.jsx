import { createBrowserRouter, redirect } from "react-router-dom";
import ListTransportationsPublic from "../pages/public/ListTransporations";
import DetailTransportationPublic from "../pages/public/DetailTransportation";
import Login from "../pages/Login";
import Register from "../pages/AddStaff";
// import CreateTransportation from "../pages/CreateTransportation";
import AllListTransportation from "../pages/AllListTransportation";
import FormTransportation from "../pages/FormTransportation";
import ListType from "../pages/ListType";
import UpdateImage from "../pages/UpdateImage";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  //PUBLIC SITE
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <ListTransportationsPublic />,
      },
      {
        path: "/transportation/:id",
        element: <DetailTransportationPublic />,
      },
    ],
  },

  {
    path: "/cms/login",
    element: <Login />,
    loader: () => {
      return localStorage.getItem("access_token") ? redirect("/cms") : null;
    },
  },
  //END OF PUBLIC SITE

  //CMS SITE
  {
    path: "/cms",
    element: <RootLayout />,
    loader: () => {
      return !localStorage.getItem("access_token") ? redirect("/cms/login") : null;
    },
    children: [
      //   landing page cms
      {
        index: true, //ini ketika akses /cms pertama kali
        element: <AllListTransportation />,
      },
      {
        path: "transportation",
        element: <FormTransportation />,
      },
      {
        path: "transportation/:id",
        element: <FormTransportation />,
      },
      {
        path: "add-staff",
        element: <Register />,
      },
      {
        path: "types",
        element: <ListType />,
      },
      {
        path: "transportation/:id/img",
        element: <UpdateImage />,
      },
    ],
  },
  {
    path: "/cms/register",
    element: <Register />,
  },
  //END OF CMS SITE
]);

export default router;
