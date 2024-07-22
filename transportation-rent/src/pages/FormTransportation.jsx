import axios from "../utils/axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";

function EditTransportation() {
  const navigate = useNavigate();
  const [types, setTypes] = useState([]);

  const [transportationData, setTransportationData] = useState({
    name: "",
    description: "",
    imgUrl: "",
    location: "",
    price: "",
    typeId: "",
  });
  const handleChangeInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setTransportationData({
      ...transportationData,
      [key]: value,
    });
  };

  const { id } = useParams();
  const fetchDataTransportation = async () => {
    const { data } = await axios({
      method: "GET",
      url: `/transportations/${id}`,
      headers: {
        Authorization: "Bearer " + localStorage.access_token,
      },
    });
    let resultTransporation = data.transportation;
    setTransportationData(resultTransporation);
  };

  const fetchDataTypes = async () => {
    const { data } = await axios({
      method: "GET",
      url: `/types`,
      headers: {
        Authorization: "Bearer " + localStorage.access_token,
      },
    });
    let resultTypes = data;
    setTypes(resultTypes);
  };

  useEffect(() => {
    fetchDataTypes();
    if (id) {
      fetchDataTransportation();
    }
  }, []);

  const handleAddTransportation = async (e) => {
    e.preventDefault();
    try {
      console.log(transportationData);
      const { data } = await axios({
        method: "POST",
        url: "/transportations",
        data: {
          name: transportationData.name,
          description: transportationData.description,
          imgUrl: transportationData.imgUrl,
          location: transportationData.location,
          price: transportationData.price,
          typeId: transportationData.typeId,
        },
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      navigate("/cms/");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePutTransportation = async (e) => {
    e.preventDefault();
    const { data } = await axios({
      method: "PUT",
      url: `/transportations/${id}`,
      data: {
        name: transportationData.name,
        description: transportationData.description,
        imgUrl: transportationData.imgUrl,
        location: transportationData.location,
        price: transportationData.price,
        TypeId: transportationData.typeId,
      },
      headers: {
        Authorization: "Bearer " + localStorage.access_token,
      },
    });
    navigate("/cms/");
  };

  console.log(transportationData.name);
  return (
    <>
      <h1 className="display-5" style={{ textAlign: "center" }}>
        Form Transportation
      </h1>
      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="new-product-section">
        <div className="row">
          <div className="col-12 col-md-6">
            <form onSubmit={id ? handlePutTransportation : handleAddTransportation} id="product-form">
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="product-name">
                  Name <span className="text-danger fw-bold">*</span>
                </label>
                <input type="text" className="form-control" id="product-name" placeholder="Enter product name" autoComplete="off" required="" name="name" value={transportationData.name} onChange={handleChangeInput} />
              </div>

              {/* Description */}
              <div className="mb-3">
                <label htmlFor="product-description">
                  Description <span className="text-danger fw-bold">*</span>
                </label>
                <input type="text" className="form-control" id="product-name" placeholder="Enter product description" autoComplete="off" required="" name="description" value={transportationData.description} onChange={handleChangeInput} />
              </div>

              {/* Image Url */}
              <div className="mb-3">
                <label htmlFor="product-description">Image Url</label>
                <input type="text" className="form-control" id="product-name" placeholder="Enter product image url" autoComplete="off" required="" name="imgUrl" value={transportationData.imgUrl} onChange={handleChangeInput} />
              </div>

              {/* Location */}
              <div className="mb-3">
                <label htmlFor="product-description">Location</label>
                <input type="text" className="form-control" id="product-name" placeholder="Enter product location" autoComplete="off" required="" name="location" value={transportationData.location} onChange={handleChangeInput} />
              </div>

              {/* Price */}
              <div className="mb-3">
                <label htmlFor="product-description">
                  Price
                  <span className="text-danger fw-bold">*</span>
                </label>
                <input type="number" className="form-control" id="product-name" placeholder="Enter product price" autoComplete="off" required="" name="price" value={transportationData.price} onChange={handleChangeInput} />
              </div>

              <div className="mb-3">
                <label htmlFor="product-category">
                  Type ID <span className="text-danger fw-bold">*</span>
                </label>
                <select value={transportationData.typeId} name="typeId" onChange={handleChangeInput} id="product-category" className="form-select" required="">
                  <option value="" selected="" disabled="">
                    -- Select Category --
                  </option>
                  {types.map((el) => {
                    return (
                      <option value={el.id} key={el.id}>
                        {el.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="row mt-5 mb-3">
                <Button className="btn btn-lg btn-danger rounded-pill w-100 p-2" onClick={() => navigate("/cms")}>
                  Cancel
                </Button>
                <Button type={"submit"}>Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditTransportation;
