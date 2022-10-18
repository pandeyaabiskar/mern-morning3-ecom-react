import "./homelayout.css";
import ProductCard from "../../components/ProductCard";
import { useFetch } from "../../utils/hooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productSlice";
import { useEffect } from "react";

import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

export default function HomeLayout() {
  //Custom Hook
  // const {data:productData, isLoading, error} = useFetch('http://localhost:4000/api/products')

  //Redux
  // const dispatch = useDispatch();
  // const { productData, isLoading, error } = useSelector(
  //   (state) => state.product
  // );

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);

  //Context
  // const { productData, isLoading, error } = useContext(ProductContext);

  return (
    <section className="products">
      {!isLoading ? (
        !error ? (
          productData.map((product, index) => {
            return <ProductCard data={product} key={index} />;
          })
        ) : (
          <h1>Some Error Occured</h1>
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
}
