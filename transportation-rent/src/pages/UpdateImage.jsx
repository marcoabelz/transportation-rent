import { Button } from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../utils/axios";

function UpdateImage() {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);

  const fetchImageData = async () => {
    let { data } = await axios({
      method: "GET",
      url: `/transportations/${id}`,
      headers: {
        Authorization: "Bearer " + localStorage.access_token,
      },
    });
    console.log(data);
    setImage(data.transportation.imgUrl);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    try {
      // console.log("uploading ...");
      const formData = new FormData();
      formData.append("imgUrl", file);
      const { data } = await axios.patch(`/transportations/${id}/img`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      navigate("/cms");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImageData();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="update-product-section">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="pt-3 pb-2 mb-3">
              <form onSubmit={handleImageUpload} id="register-form">
                <h1 className="h3 mb-3 display-5">Update Image</h1>
                <img src={image} style={{ width: 250, height: "100%", marginBottom: 20 }} alt="" />
                {/* <div class="mb-3"> */}
                <div className="input-group mb-3">
                  <input onChange={(e) => setFile(e.target.files[0])} type="file" className="form-control pb-2" id="inputGroupFile02" autoComplete="off" required="" />
                  {/* <input onChange={(e) => console.log(e.target.files[0])} type="file" className="form-control pb-2" id="inputGroupFile02" autoComplete="off" required="" /> */}
                </div>
                <Button className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3" type="submit">
                  Update Image
                </Button>
                <Button onClick={() => navigate("/cms/")} className="btn btn-lg btn-secondary rounded-pill w-100 p-2 mt-3">
                  Cancel
                </Button>
                {/* </div> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UpdateImage;
