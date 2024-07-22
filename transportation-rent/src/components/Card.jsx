import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Card(props) {
  let { id, imgUrl, name, price, location, description } = props.transportation;
  // console.log(transportation);
  // console.log(transportation.transportation.name);
  return (
    <>
      <div className="card col-3">
        <img src={imgUrl} style={{ height: 200 }} className="card-img-top" alt="Fissure in Sandstone" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>Price: Rp. {price}</p>
          <p>Location: {location}</p>
          <p className="card-text" style={{ height: 75 }}>
            {description}
          </p>
          <NavLink to={`/transportation/${id}`} className="btn btn-primary" data-mdb-ripple-init="">
            See Detail
          </NavLink>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  imgUrl: propTypes.string,
  location: propTypes.string,
  name: propTypes.string,
  price: propTypes.number,
  description: propTypes.string,
};

export default Card;
