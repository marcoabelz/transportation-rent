function Pagination({ paginationOption, currentPage, setCurrentPage }) {
  const { totalPages } = paginationOption;
  const handleChangePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  const pageNumbers = () => {
    let numbers = [];
    for (let i = 1; i <= totalPages; i++) {
      numbers.push(
        <li className="page-item" key={i}>
          <button className={"page-link " + (currentPage === i ? "fw-semibold link-underline-primary" : "")} onClick={() => handleChangePage(i)} disabled={currentPage === i}>
            {i}
          </button>
        </li>
      );
    }
    return numbers;
  };
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-circle">
          <li className="page-item">
            <button className="page-link" onClick={() => handleChangePage(currentPage - 1)}>
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {pageNumbers()}
          <li className="page-item">
            <button className="page-link" onClick={() => handleChangePage(currentPage + 1)}>
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
