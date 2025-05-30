import PropTypes from "prop-types";
import Copy from "../Animations/gsap-anim/TextAnimation";

const ProductSpecs = ({ measurements, price }) => {
  return (
    <div className="">
      <Copy startAtTenPercent={true}>
        {/* Measurements */}
        <h3 className="uppercase font-semibold">Measurements</h3>
      </Copy>
      <div className="border-y border-[#402D1F] flex flex-col justify-between py-[0.5rem] ">
        {measurements.map(({ label, value }, index) => (
          <div key={index} className="flex justify-between w-full body-text">
            <div className="flex items-center body-text">
              <span className="mr-2 body-text">•</span>
              <span className="body-text">{label}</span>
            </div>
            <span className="body-text">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductSpecs.propTypes = {
  measurements: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductSpecs;
