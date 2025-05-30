import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";

const WorkCard = ({ image, title, number, link, size }) => {
  // Brug forskellige aspect-ratio afhængigt af skærmstørrelse og card-type
  const baseClasses = "w-full break-inside-avoid";
  const aspectClass =
    size === "big"
      ? "aspect-[4/5] md:aspect-[3/4]" // store: højere
      : "aspect-[4/5]  md:aspect-[5/6]"; // små: lidt lavere

  return (
    <Link href={link || "/"} className="">
      <div className={`${baseClasses} ${aspectClass} mx-auto md:max-w-full md:scale-90`}>
        <div className="w-full h-full overflow-hidden drop-shadow-primary">
          <Image
            width={1920}
            height={1080} //
            quality={100}
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
          />
        </div>
        <div className="flex mt-2 justify-between items-center">
          <p>{String(number).padStart(3, "0")}</p>
          <p className="uppercase">{title}</p>
        </div>
      </div>
    </Link>
  );
};

WorkCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "big"]),
};

export default WorkCard;
