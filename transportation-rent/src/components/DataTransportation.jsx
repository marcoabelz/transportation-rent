import axios from "../utils/axios";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import ShowToastError from "../utils/toast";

function DataTransportation(props) {
  // console.log(props.transportation);
  const { no, fetchTransportations } = props;
  const typeName = props.transportation.Type.name;
  let { id, imgUrl, name, price, location, description, authorId } = props.transportation;

  const navigate = useNavigate();
  const deleteData = async () => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `/transportations/${id}`,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      fetchTransportations();

      navigate("/cms");
    } catch (error) {
      ShowToastError(error.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <tr>
        <td scope="row">{no}</td>
        <td className="fw-bold">{name}</td>
        <td>
          <img style={{ width: 200, height: 100 }} src={imgUrl} />
        </td>
        <td>{description}</td>
        <td>{location}</td>
        <td className="fw-bold">{price}</td>
        <td>{typeName}</td>
        <td>{authorId}</td>
        <td className="d-flex flex-column justify-content-center align-items-center">
          {/* <span className="d-flex"> */}
          <Button onClick={() => navigate(`/cms/transportation/${id}`)} className={"col-12 w-100"}>
            Edit
          </Button>
          <Button className="w-100" onClick={() => navigate(`/cms/transportation/${id}/img`)}>
            Update Image
          </Button>
          <Button className="btn btn-danger w-100" onClick={() => deleteData()} to={"/cms"}>
            Delete
          </Button>
          {/* </span> */}
        </td>
      </tr>
    </>
  );
}

export default DataTransportation;
