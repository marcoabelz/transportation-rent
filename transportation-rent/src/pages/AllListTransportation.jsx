import DataTransportation from "../components/DataTransportation";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import ShowToastError from "../utils/toast";

function ListTransportationCms() {
  const [transportations, setTransportations] = useState([]);
  // const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const fetchTransportations = async () => {
    try {
      let { data } = await axios({
        method: "GET",
        url: "/transportations",
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
        params: {
          // search: search,
          sort: sort,
        },
      });
      let datas = data.transportations;
      setTransportations(
        datas.map((el) => ({
          id: el.id,
          name: el.name,
          price: el.price,
          description: el.description,
          imgUrl: el.imgUrl,
          location: el.location,
          Type: el.Type,
          User: el.User,
          typeId: el.typeId,
          authorId: el.authorId,
        }))
      );
    } catch (error) {
      ShowToastError(error.response?.data?.message || error.message);
    }
  };
  useEffect(() => {
    fetchTransportations();
  }, [sort]);
  console.log(sort);
  return (
    <>
      <section id="transportation-list">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-5">Transportations</h1>
          <button className="btn btn-primary rounded-pill " id="new-product">
            <NavLink to={"/cms/transportation"} className="button-font-color icon material-symbols-outlined">
              Add Transportation
            </NavLink>
          </button>
        </div>
        <div className="row">
          <section id="sort">
            <h5>Sort by :</h5>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select one
              </button>
              <ul className="dropdown-menu">
                <li>
                  <span onClick={() => setSort("name")} className="dropdown-item">
                    Name (Ascending)
                  </span>
                </li>
                <li>
                  <span onClick={() => setSort("-name")} className="dropdown-item">
                    Name (Descending)
                  </span>
                </li>
                <li>
                  <span onClick={() => setSort("price")} className="dropdown-item">
                    Price (Ascending)
                  </span>
                </li>
                <li>
                  <span onClick={() => setSort("-price")} className="dropdown-item">
                    Price (Descending)
                  </span>
                </li>
                <li>
                  <span onClick={() => setSort("location")} className="dropdown-item">
                    Location (Ascending)
                  </span>
                </li>
                <li>
                  <span onClick={() => setSort("-location")} className="dropdown-item">
                    Location (Descending)
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <div className="col-12 table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col" width="180px">
                    Image
                  </th>
                  <th scope="col" width="250px">
                    Description
                  </th>
                  <th scope="col">Location</th>
                  <th scope="col">Price</th>
                  <th scope="col">Type Id</th>
                  <th scope="col">Author Id</th>
                  <th scope="col"> Actions</th>
                </tr>
              </thead>
              <tbody id="table-product">
                {transportations.map((transportation, idx) => (
                  <DataTransportation no={idx + 1} key={transportation.id} transportation={transportation} fetchTransportations={fetchTransportations} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListTransportationCms;
