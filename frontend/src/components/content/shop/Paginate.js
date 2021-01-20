import React from "react";
import { Link } from "react-router-dom";
import classes from "./Paginate.module.scss";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <div className={classes.pages}>
        {[...Array(pages).keys()].map((p) => (
          <Link
            className={`${classes.link} ${
              p + 1 === page ? classes.active : classes.inactive
            }`}
            key={p + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/products/search/${keyword}/page/${p + 1}`
                  : `/products/page/${p + 1}`
                : `/admin/productlist/${p + 1}`
            }
          >
            {p + 1}
          </Link>
        ))}
      </div>
    )
  );
};

export default Paginate;
