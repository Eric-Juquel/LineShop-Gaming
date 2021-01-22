import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductGallery.scss";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import ErrorComponent from '../ErrorComponent'
import { listTopProducts } from "../../actions/productActions";

const ProductGallery = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : error ? (
    <ErrorComponent err={error} />
  ) : (
    <div className="ProductGalleryContainer">
      <div className="ProductGalleryTitle">
        <h1>Top 14 products</h1>
      </div>
      <div className="gallery">
        {products.map((product, index) => (
          <Link
            key={product._id}
            to={`/product/${product._id}`}
            className={`gallery__item gallery__item--${index}`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="gallery__img"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
