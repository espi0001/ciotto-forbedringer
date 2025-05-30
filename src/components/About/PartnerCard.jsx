import Link from "next/link";
import Image from "next/image";

const PartnerCard = ({ image, alt, title, description, slug, className = "" }) => (
  <Link href={`/works/${slug}`} className={`flex flex-col items-center cursor-pointer ${className}`}>
    <Image width={1000} height={1000} className="mb-2  object-cover" src={image} alt={alt || title} />
    <h3 className="font-semibold text-sm mb-1">{title}</h3>
    <p className="p-product text-center">{description}</p>
  </Link>
);

export default PartnerCard;
