import React, { useRef } from "react";
import classes from "./ProductListScreen.module.scss";
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { GiEmptyMetalBucketHandle } from "react-icons/gi";

import Modal from "../../Modal";

const ProductItem = ({ product, deleteProduct, editProduct }) => {
  const modalRef = useRef();

  const onBack = () => {
    modalRef.current.closeModal();
  };

  const deleteHandler = () => {
    modalRef.current.openModal();
  };

  return (
    <div className={classes.row}>
      <div className={classes.cell}>{product._id}</div>
      <div className={classes.cell}>{product.name}</div>
      <div className={classes.cell}>{product.countInStock}</div>
      <div className={classes.cell}>{product.price} €</div>
      <div className={classes.cell}>{product.category}</div>
      <div className={classes.cell}>{product.brand}</div>
      <div className={classes.cell}>
        <button
          title="Edit Product"
          className={classes.edit}
          onClick={() => editProduct(`/admin/product/${product._id}/edit`)}
        >
          <FaRegEdit/>
        </button>
        <button
          title="Delete Product"
          className={classes.delete}
          onClick={() => deleteHandler()}
        >
          <GiEmptyMetalBucketHandle/>
        </button>
      </div>
      <Modal ref={modalRef} height="20%" width="30%">
        <div className={classes.modal}>
          <h4>Delete {product.name} ?</h4>
          <button className={classes.cancel} onClick={onBack}>
            No
          </button>
          <button
            className={classes.validate}
            onClick={() => deleteProduct(product._id)}
          >
            Yes
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductItem;
