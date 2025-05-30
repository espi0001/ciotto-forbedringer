import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";
import Button from "../UI/Button";

const ProductCard = ({ image, title, link, small = false }) => {
  if (small) {
    return (
      <Link href={link || "/"} className="flex flex-col items-center w-full">
        <div className="w-full aspect-[1/1] flex items-center justify-center overflow-hidden">
          <Image quality={100} src={image} alt={title} width={1920} height={1080} className="w-full h-full object-cover aspect-[1/1] hover:scale-[1.10] transition overflow-hidden" />
        </div>
        <div className="flex flex-col xl:flex-row justify-between w-full mt-2">
          <span className="text-xs text-primary-text font-normal">{title}</span>
          <Button className="!text-sm" size="small" variant="primary" link={link || "/"}>
            View Piece
          </Button>
        </div>
      </Link>
    );
  }
  return (
    <Link href={link || "/"}>
      <div className="drop-shadow-primary w-full aspect-[3/4] flex flex-col items-center justify-center overflow-hidden relative group">
        <Image src={image} alt={title} width={1920} height={1080} className="w-full h-full object-cover hover:scale-[1.10] transition" />
        <h2 className="text-secondary-text absolute font-medium text-center text-wrap w-min">
          {title}
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary-text origin-left transform transition-transform duration-500 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100" />
        </h2>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default ProductCard;
