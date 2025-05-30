import Copy from "../Animations/gsap-anim/TextAnimation";

function TitleSection({ title, description }) {
  return (
    <div className="section-spacing-small">
      <Copy delay={1}>
        <h1 className="h1-medium font-semibold mb-[10px]">{title}</h1>
      </Copy>
      <Copy delay={1}>
        <p className="p-large max-w-[600px]">{description}</p>
      </Copy>
    </div>
  );
}

export default TitleSection;
