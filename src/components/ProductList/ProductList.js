import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function ProductList({category}) {
  const { products } = useContext(AppContext);

  const output = products.filter(product => product.category === category.id)
  .map(product => (
    <div key={product.id} className="Product">
        <img src={product.picture} alt={product.name} />
        <NavLink to={`/products/` + product.slug}>
            {product.name}
        </NavLink>
        <span>{product.price} som</span>
    </div>
  ));

  return <div className="product-list">
    {output}
  </div>;
}
