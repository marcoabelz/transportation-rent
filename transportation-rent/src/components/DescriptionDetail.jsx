function ImageDetail() {
  return (
    <>
      <div className="row p-5">
        <div className="col-md-6">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" className="img-fluid rounded" alt="Fissure in Sandstone" />
          {/* <div className="col-md-6">
          <h2 className="mb-4">Title</h2>
          <p className="lead mb-4">Price: $XXX</p>
          <p className="lead mb-4">Location: XYZ</p>
          <p className="lead mb-4">Type: Car</p>
          <p className="lead mb-4">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="btn btn-primary">Rent Now</button>
        </div> */}
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Title</h2>
          <p className="lead mb-4">Price: $XXX</p>
          <p className="lead mb-4">Location: XYZ</p>
          <p className="lead mb-4">Type: Car</p>
          <p className="lead mb-4">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="btn btn-primary">Rent Now</button>
        </div>
      </div>
    </>
  );
}

export default ImageDetail;
