import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/cms/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      {localStorage.access_token ? (
        <>
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-5">
                <NavLink
                  className={({ isActive, isPending }) => {
                    return isPending ? "text-warning" : isActive ? "text-danger" : "";
                  }}
                  to={"/cms"}
                  end
                >
                  Transportations
                </NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink
                  className={({ isActive, isPending }) => {
                    return isPending ? "text-warning" : isActive ? "text-danger" : "";
                  }}
                  to={"/cms/types"}
                >
                  Types
                </NavLink>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <Button onClick={() => navigate("/cms/add-staff")} className="btn-secondary me-2" to={"/cms/add-staff"}>
                Add Staff
              </Button>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          </div>
        </>
      ) : (
        <div style={{ justifyContent: "center" }} className="container-fluid">
          <div style={{ alignItems: "center" }} className="align-items-center">
            <Button className="w-100 btn-warning" onClick={() => navigate("/cms/login")}>
              Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
