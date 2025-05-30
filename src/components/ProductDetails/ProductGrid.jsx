import RelatedProducts from "./RelatedProducts";
import PropTypes from "prop-types";

const ProductGrid = ({ products, small = false }) => (
  <div
    className={
      small
        ? "grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-8 lg:gap-x-10 gap-y-4" //
        : "grid grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-8 lg:gap-y-12 gap-x-4"
    }
  >
    {products.map((product) => (
      <RelatedProducts key={product.id} image={product.image} title={product.title} link={product.link} small={small} />
    ))}
  </div>
);

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  small: PropTypes.bool,
};

export default ProductGrid;
