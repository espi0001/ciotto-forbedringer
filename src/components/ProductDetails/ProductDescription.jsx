import PropTypes from "prop-types";
import Copy from "../Animations/gsap-anim/TextAnimation";
import Button from "../UI/Button";
const ProductDescription = ({ description, price }) => {
  return (
    // w-full lg:w-[207px]
    <div className="md:mt-[70px]">
      <div>
        <Copy startAtTenPercent="true" delay={1}>
          <h2 className="mb-4 font-bold h3-product">Description:</h2>
          <p className="max-w-[64ch]">{description}</p>
        </Copy>
      </div>
      <div className="flex flex-col gap-6 mb-6">
        <Copy startAtTenPercent="true" delay={1}>
          <p className="font-semibold mt-6">Only available to purchase by contacting Ciotto.</p>
        </Copy>
        <Copy startAtTenPercent="true" delay={1}>
          <p>{price}</p>
        </Copy>
        <Button className="text-xl body-text" size="large" variant="primary" link="/contact">
          Contact to purchase
        </Button>
      </div>
    </div>
  );
};

ProductDescription.propTypes = {
  price: PropTypes.string.isRequired,
};

export default ProductDescription;
