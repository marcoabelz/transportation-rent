import FilterTransportation from "./FilterTransportation";
import { useState } from "react";
import axios from "../utils/axios";
import { Link } from "react-router-dom";

function Heading() {
  // const [types, setTypes] = useState([]);
  // const fetchData = async () => {
  //   const { data } = await axios({
  //     method: "GET",
  //     url: "/",
  //   });
  // };
  return (
    <>
      <h1 className="display-5" id="page-title">
        Transportations List
      </h1>
      <section id="sort">
        <h5>Sort by :</h5>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select one
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="?name">
                Name (Ascending)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="?-name">
                Name (Descending)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="?price">
                Price (Ascending)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="?-price">
                Price (Descending)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="?location">
                Location (Ascending)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="?-location">
                Location (Descending)
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section id="filter">
        <h5>Filter by typeId:</h5>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select one
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link to={"/"} className="dropdown-item">
                Name (Ascending)
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Heading;
