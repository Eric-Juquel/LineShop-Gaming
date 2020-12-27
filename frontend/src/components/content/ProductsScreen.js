import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import classes from "./ProductsScreen.module.scss";
import ProductCard from "./ProductCard";
import { listProducts } from '../../actions/productActions'

const ProductsScreen = () => {
 const dispatch = useDispatch()

 useEffect(() => {
   dispatch(listProducts())
 }, [dispatch])

  return (
    <div className={classes.container}>
      <ProductCard />
    </div>
  );
};

export default ProductsScreen