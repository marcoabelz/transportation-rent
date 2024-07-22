import { NavLink, useNavigate } from "react-router-dom";

function NavbarPublic() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/cms/login");
  };

  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <button data-mdb-collapse-init="" className="navbar-toggler" type="button" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Navbar brand */}
              <NavLink to={"/"} className="navbar-brand mt-2 mt-lg-0">
                <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="{15}" alt="MDB Logo" loading="lazy" />
              </NavLink>
            </div>
            {/* Right elements */}
            <div className="d-flex align-items-center">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item me-5">
                  <NavLink
                    className={({ isActive, isPending }) => {
                      return isPending ? "text-warning" : isActive ? "text-danger" : "";
                    }}
                    to={"/cms/login"}
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
              {/* Search bar */}
              <form className="d-flex input-group w-auto">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" name="search" />
                <span className="input-group-text border-0" id="search-addon">
                  <i className="fas fa-search" />
                </span>
              </form>
              <div></div>
            </div>
            {/* Right elements */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </section>
      ;
    </>
  );
}

export default NavbarPublic;
