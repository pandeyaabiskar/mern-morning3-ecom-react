import "./homelayout.css";
import ProductCard from "../../components/ProductCard";
import { useFetch } from "../../utils/hooks";

export default function HomeLayout() {
 const {data:productData, isLoading, error} = useFetch('http://localhost:4000/api/products')

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
