import { useState } from "react";
import axios from "../utils/axios";
import ShowToastError from "../utils/toast";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [key]: value,
    });
  };

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios({
        method: "POST",
        url: "/login",
        data: userData,
      });
      localStorage.setItem("access_token", data.access_token);
      navigate("/cms");
      // console.log(data);
    } catch (error) {
      ShowToastError(error.response?.data?.message || error.message); // Panggil showToastError tanpa "error" tambahan
      console.log(error);
    }
  };
  // handleLogin();

  return (
    <>
      <div className="container">
        <div className="col-3">
          <Button className="btn-success" onClick={() => navigate("/")}>
            Go To Public Site
          </Button>
        </div>
      </div>
      <h1 className="display-5 m-5" style={{ textAlign: "center" }}>
        Login
      </h1>
      <div className="container mx-auto">
        <form onSubmit={handleLogin} className="login-form-size">
          {/* Email input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <br />
            <input type="email" id="form2Example1" className="form-control" name="email" value={userData.email} onChange={handleChangeInput} />
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
          </div>
          {/* Password input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <br />
            <input type="password" id="form2Example2" className="form-control" name="password" value={userData.password} onChange={handleChangeInput} />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>

          <button data-mdb-ripple-init="" type="submit" className="btn btn-primary btn-block mb-4 mt-5">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
