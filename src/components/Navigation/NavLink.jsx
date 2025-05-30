import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppLink({
  href, //
  children,
  className = "",
  underline = true,
  underlineColor = "bg-primary-text",
  highlighted = false,
  bold = false,
  extrabold = false,
  asListItem = false,
  navColor = "",
  ...props
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const base = `relative group text-base ${
    extrabold
      ? "font-extrabold" //
      : bold
      ? "font-bold"
      : ""
  } ${className}`;
  const underlineClass = underline //
    ? `absolute -bottom-1 left-0 w-full h-0.5 ${underlineColor} origin-left transform transition-transform duration-500 ${isActive ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100 group-focus:scale-x-100`
    : "";

  const content = (
    <>
      {children}
      {underline && <span className={underlineClass} />}
    </>
  );

  const link = href?.startsWith("http") ? (
    <a href={href} className={base} {...props}>
      {content}
    </a>
  ) : (
    <Link href={href} className={base} {...props}>
      {content}
    </Link>
  );

  return asListItem ? <li>{link}</li> : link;
}
