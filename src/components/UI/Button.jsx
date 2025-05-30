import Link from "next/link";
import Copy from "../Animations/gsap-anim/TextAnimation";

export default function Button({ children, variant = "primary", link, size = "large", type = "button", withCopy = false, delayVariant = 0, startAtTenPercent = false, className = "" }) {
  const base = "font-semibold cursor-pointer inline-flex items-center gap-[1rem] transition-colors group uppercase";

  const variants = {
    primary: {
      base: "text-tertiary-text",
      hover: "",
    },
    secondary: {
      base: "text-secondary-button",
      hover: "",
    },
  };

  const sizes = {
    large: "body-text",
    small: "text-sm",
  };

  const classes = [base, variants[variant]?.base, variants[variant]?.hover, sizes[size], className].join(" ");

  if (link) {
    return (
      <Link href={link} className={classes}>
        {withCopy ? (
          <>
            <Copy delay={delayVariant} startAtTenPercent={startAtTenPercent}>
              <span>{children}</span>
            </Copy>
            <Copy delay={delayVariant} startAtTenPercent={startAtTenPercent}>
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                <ArrowIcon variant={variant} size={size} />
              </span>
            </Copy>
          </>
        ) : (
          <>
            <span>{children}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              <ArrowIcon variant={variant} size={size} />
            </span>
          </>
        )}
      </Link>
    );
  }

  return (
    <button className={classes} type={type}>
      {withCopy ? (
        <>
          <Copy delay={delayVariant} startAtTenPercent={startAtTenPercent}>
            <span>{children}</span>
          </Copy>
          <Copy delay={delayVariant} startAtTenPercent={startAtTenPercent}>
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              <ArrowIcon variant={variant} size={size} />
            </span>
          </Copy>
        </>
      ) : (
        <>
          <span>{children}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            <ArrowIcon variant={variant} size={size} />
          </span>
        </>
      )}
    </button>
  );
}

function ArrowIcon({ variant, size = "large" }) {
  const width = size === "small" ? 44 : 88;
  const height = 16;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 88 16" fill="none">
      <path fill="currentColor" d="M87.207 8.707a1 1 0 0 0 0-1.414L80.843.929a1 1 0 1 0-1.414 1.414L85.086 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM.5 8v1h86V7H.5v1Z" />
    </svg>
  );
}
