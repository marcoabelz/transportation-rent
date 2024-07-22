import { useState } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import ShowToastError from "../utils/toast";

function AddStaff() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const handleChangeInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [key]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
      const newUser = await axios({
        method: "POST",
        url: "/add-user",
        data: userData,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      console.log(newUser);
      navigate("/");
    } catch (error) {
      error.response?.data?.message.map((el) => {
        ShowToastError(el);
      });
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="col-3">
          <Button className="btn-success" onClick={() => navigate("/cms")}>
            Back
          </Button>
        </div>
      </div>
      <h1 className="display-5 m-5" style={{ textAlign: "center" }}>
        Register
      </h1>
      <div className="container mx-auto">
        <form onSubmit={handleRegister} className="login-form-size">
          <div className="row mb-4">
            <div className="col">
              <div data-mdb-input-init="" className="form-outline">
                <br />
                <input style={{ border: "2px solid black" }} type="text" id="form3Example2" className="form-control" name="username" value={userData.username} onChange={handleChangeInput} />
                <label className="form-label" htmlFor="form3Example2">
                  Username
                </label>
              </div>
            </div>
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <br />
            <input style={{ border: "2px solid black" }} type="email" id="form3Example3" className="form-control" name="email" value={userData.email} onChange={handleChangeInput} />
            <label className="form-label" htmlFor="form3Example3">
              Email
            </label>
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <br />
            <input style={{ border: "2px solid black" }} type="password" id="form3Example4" className="form-control" name="password" value={userData.password} onChange={handleChangeInput} />
            <label className="form-label" htmlFor="form3Example4">
              Password
            </label>
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <br />
            <input style={{ border: "2px solid black" }} type="number" id="form3Example4" className="form-control" name="phoneNumber" value={userData.phoneNumber} onChange={handleChangeInput} />
            <label className="form-label" htmlFor="form3Example4">
              Phone Number
            </label>
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <br />
            <input style={{ border: "2px solid black" }} type="text" id="form3Example4" className="form-control" name="address" value={userData.address} onChange={handleChangeInput} />
            <label className="form-label" htmlFor="form3Example4">
              Address
            </label>
          </div>
          <button data-mdb-ripple-init="" type="submit" className="btn btn-primary btn-block mb-4 mt-5">
            Sign up
          </button>
          {/* <div className="text-center">
            <p>or sign up with:</p>
            <button data-mdb-ripple-init="" type="button" className="btn btn-secondary btn-floating mx-1">
              <i className="fab fa-facebook-f" />
            </button>
            <button data-mdb-ripple-init="" type="button" className="btn btn-secondary btn-floating mx-1">
              <i className="fab fa-google" />
            </button>
            <button data-mdb-ripple-init="" type="button" className="btn btn-secondary btn-floating mx-1">
              <i className="fab fa-twitter" />
            </button>
            <button data-mdb-ripple-init="" type="button" className="btn btn-secondary btn-floating mx-1">
              <i className="fab fa-github" />
            </button>
          </div> */}
        </form>
      </div>
    </>
  );
}

export default AddStaff;
