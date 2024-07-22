import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import axios from "../../utils/axios";
import { Button } from "../../components/Button";

function App() {
  const [transportations, setTransportations] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const [paginationOption, setPaginationOption] = useState({
    totalData: 0,
    totalPages: 1,
    dataPerPage: 0,
  });
  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  // const [types, setTypes] = useState([]);
  const fetchTransportations = async () => {
    try {
      let { data } = await axios({
        method: "GET",
        url: "/pub/transportation",
        params: {
          page: {
            size: pageSize,
            number: currentPage,
          },
          search: search,
          sort: sort,
        },
      });
      let { totalData, totalPages, dataPerPage } = data;
      console.log(data, "ini total pages");
      let datas = data.data;
      setTransportations(
        datas.map((el) => ({
          id: el.id,
          name: el.name,
          price: el.price,
          description: el.description,
          location: el.location,
          imgUrl: el.imgUrl,
        }))
      );
      setPaginationOption(() => ({ totalData, totalPages, dataPerPage }));
      datas.length === 0 ? console.log("No data found!") : "";
    } catch (error) {
      console.log(error);
    }
  };
  console.log(sort);

  // const fetchDataTypes = async () => {
  //   const { data } = await axios({
  //     method: "GET",
  //     url: `/types`,
  //     headers: {
  //       Authorization: "Bearer " + localStorage.access_token,
  //     },
  //   });
  //   let resultTypes = data;
  //   setTypes(resultTypes);
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchTransportations();
  };

  useEffect(() => {
    fetchTransportations();
    // fetchDataTypes();
  }, [pageSize, sort, currentPage]);
  // console.log(types);

  return (
    <>
      {/* <NavbarPublic /> */}
      <div className="container d-flex flex-column">
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
        <section id="filter">
          <h5>Filter by typeId:</h5>
          <h5>Coming Soon</h5>
          {/* <div className="dropdown">
            <select name="typeId" id="product-category" className="form-select" required="">
              <option value="" selected="" disabled="">
                -- Select Category --
              </option>
              {/* {types.map((el) => {
                return (
                  <option value={el.id} key={el.id}>
                    {el.name}
                  </option>
                );
              })} }
            </select>
          </div> */}
        </section>
        <div className="container">
          {/* Search bar */}
          <form onSubmit={handleSearch} className="d-flex input-group w-auto">
            <input type="search" className="form-control rounded" placeholder="Search by name ..." aria-label="Search" aria-describedby="search-addon" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search" />
            </span>
            <Button className="w-25" type="submit" placeholder>
              Search
            </Button>
          </form>
          <div className="container d-flex align-items-center my-2">
            <label htmlFor="page-size">Page Size : </label>
            <select id="page-size" className="form-select w-50 ms-3" aria-label="Default select example" value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
              {/* <option value="12">12</option> */}
            </select>
          </div>
          <div className="row" id="card-position">
            {transportations.map((transportation) => (
              <Card key={transportation.id} transportation={transportation} />
            ))}
          </div>
        </div>
        <Pagination paginationOption={paginationOption} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
      </div>
    </>
  );
}

export default App;
