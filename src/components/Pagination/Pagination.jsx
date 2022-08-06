import ReactPaginate from "react-paginate";
import classes from "./Pagination.module.scss";

export const Pagination = ({ totalPages, itemsPerPage, setPagesRange }) => {
  const handlePageClick = (clicked) => {
    setPagesRange(clicked.selected + 1, itemsPerPage);
  };
  return (
    <ReactPaginate
      previousLabel={""}
      nextLabel={""}
      breakLabel={"..."}
      pageCount={totalPages}
      onPageChange={handlePageClick}
      containerClassName={classes.nav}
      pageClassName={classes.pageItem}
      pageLinkClassName={classes.pageLink}
      previousClassName={classes.dNone}
      nextClassName={classes.dNone}
      breakClassName={classes.pageItem}
      activeClassName={classes.active}
    />
  );
};
