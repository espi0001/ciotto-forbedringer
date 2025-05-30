import Link from "next/link";

export default function Logo({ className = "", size = "text-4xl", ...props }) {
  return (
    <Link href="/" className={`font-medium tracking-wide ${size} ${className}`} {...props}>
      CIOTTO
    </Link>
  );
}
