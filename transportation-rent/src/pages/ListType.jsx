import Type from "../components/Type";
import { useEffect, useState } from "react";
import axios from "../utils/axios";

function ListTypeTransportation() {
  const [types, setTypes] = useState([]);
  const fetchData = async () => {
    try {
      let { data } = await axios({
        method: "GET",
        url: "/types",
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      let no = 1;
      setTypes(
        data.map((el) => ({
          no: no,
          id: el.id,
          name: el.name,
        }))
      );
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(types, "!!!");
  return (
    <>
      <section id="category-list">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-5">Types</h1>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody id="table-category">
                {types.map((el, idx) => (
                  <Type no={idx + 1} key={el.id} types={el} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListTypeTransportation;
