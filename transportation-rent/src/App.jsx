// import React from "react";
// import ReactDOM from "react-dom/client";
import "./App.css";

// import ListTransportationPublic from "./pages/public/ListTransporations.jsx";
// import DetailTransportationPublic from "./pages/public/DetailTransportation.jsx";
// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";
// import CreateTransportation from "./pages/CreateTransportation.jsx";
// import EditTransportation from "./pages/EditTransportation.jsx";
// import UpdateImage from "./pages/UpdateImage.jsx";
// import ListCategoryTransportation from "./pages/ListCategory.jsx";
// import ListTransportation from "./pages/AllListTransportation.jsx";
// import AddStaff from "./pages/AddStaff.jsx";

import { RouterProvider } from "react-router-dom";
import Router from "./routers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={Router} />;
      <ToastContainer />
    </>
  );
}

// function App() {
//   return (
//     <>
//       <ListTransportationPublic />
//       <DetailTransportationPublic />
//       <Login />
//       <br />
//       <br />
//       <Register />
//       <br />
//       <br />
//       <CreateTransportation />
//       <br />
//       <EditTransportation />
//       <br />
//       <UpdateImage />
//       <br />
//       <ListCategoryTransportation />
//       <br />
//       <ListTransportation />
//       <br />
//       <AddStaff />
//     </>
//   );
// }

export default App;
