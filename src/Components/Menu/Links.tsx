import { Link } from "react-router-dom";
import { linksScroll } from "../../data/linksMenu";

export const Links = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="md:flex relative hidden pr-2">
      {linksScroll?.map((link) => (
        <Link
          className={`flex items-baseline mr-4 hover:text-primary/60 transition-all`}
          key={link.name}
          to={link.path}
          onClick={() => {
            scrollToSection(link.section);
          }}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
