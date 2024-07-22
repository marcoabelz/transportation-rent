import { PropTypes } from "prop-types";

function Type(props) {
  console.log(props);
  const { no, types } = props;
  const { name } = types;
  return (
    <tr>
      <td scope="row">{no}</td>
      <td className="fw-bold">{name}</td>
    </tr>
  );
}

Type.propTypes = {
  no: PropTypes.number,
  types: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default Type;
