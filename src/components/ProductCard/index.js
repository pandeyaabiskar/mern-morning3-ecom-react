import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { data } = props;

  return (
    <div className="product-card">
      <Link to={`/products/${data._id}`}>
        <div className="product-image">
          <img src={data.image} />
        </div>
        <div className="product-info">
          <h5>{data.title}</h5>
          <h6>${data.price}</h6>
        </div>
      </Link>
    </div>
  );
}
