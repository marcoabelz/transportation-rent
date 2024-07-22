import propTypes from "prop-types";

export function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <>
      {/* <div className="col-4"> */}
      <button onClick={onClick} className={"btn btn-sm btn-primary rounded-pill my-1 " + className} type={type} href="">
        {children}
      </button>
      {/* </div> */}
    </>
  );
}

Button.propTypes = {
  children: propTypes.any,
  onClick: propTypes.func,
  type: propTypes.string,
  className: propTypes.string,
};
