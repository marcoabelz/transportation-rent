// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
// import DescriptionDetail from "../components/DescriptionDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";

function DetailTransportation() {
  const [transportation, setTransportation] = useState([]);
  const { id } = useParams();
  let result;
  const getData = async () => {
    const { data } = await axios({
      method: "GET",
      url: `/pub/transportation/${id}`,
    });
    result = data.transportation;
    setTransportation({
      name: result.name,
      description: result.description,
      price: result.price,
      imgUrl: result.imgUrl,
      Type: result.Type,
      location: result.location,
    });
    // console.log(result);
  };
  useEffect(() => {
    getData();
  }, [id]);
  console.log(transportation);
  return (
    <>
      <Link to={"/"} className="btn btn-primary ms-5 mt-3 mb-0">
        Back
      </Link>
      <div className="row p-5">
        <div className="col-md-6">
          <img src={transportation.imgUrl} className="img-fluid rounded" alt="Fissure in Sandstone" />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Name: {transportation.name}</h2>
          <p className="lead mb-4">Price: {transportation.price}</p>
          <p className="lead mb-4">Location: {transportation.location}</p>
          <p className="lead mb-4">Type: {transportation.Type ? transportation.Type.name : ""}</p>
          <p className="lead mb-4">Description: {transportation.description}</p>
          <button className="btn btn-primary">Rent Now</button>
        </div>
      </div>
    </>
  );
}

export default DetailTransportation;
