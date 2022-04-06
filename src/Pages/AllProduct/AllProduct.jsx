import { Link } from "react-router-dom";
import { ProductList } from "../../component/Product-List/ProductList";
import { Filter } from "../../component/Filter/filter";
import "./AllProduct.css"

const AllProduct = () => {
  return (
    <div className="all-product">
      <Filter/>
      <ProductList/>
    </div>
  );
};

export { AllProduct };
