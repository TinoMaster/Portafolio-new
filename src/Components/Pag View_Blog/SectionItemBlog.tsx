import { lazy } from "react";
import { BlogSection } from "../../models/types/Blog";
import { convertSectionTitle } from "../../utils/convertTilteInId";
import { FormatTextWithLinks } from "../Helpers/FormatTextWithLinks";

const FormatCodeFromString = lazy(
  () => import("../Helpers/FormatCodeFromString")
);
const FormatInfoMarkdown = lazy(() => import("../Helpers/FormatInfoMarkdown"));

export const SectionItemBlog = ({ section }: { section: BlogSection }) => {
  return (
    <section className="lg:text-lg text-sm">
      {section.title ? (
        <h2
          id={convertSectionTitle(section.title, section.id)}
          className="font-bold py-5"
        >
          {section.title}
        </h2>
      ) : null}

      {section.type === "image" ? (
        <figure className="w-full p-2 bg-white/5">
          <img
            src={section.content}
            alt="imagen del blog"
            className="w-full h-full object-cover rounded-md"
          />
        </figure>
      ) : null}
      {section.type === "text" ? (
        <FormatTextWithLinks text={section.content} />
      ) : null}
      {section.type === "code" ? (
        <FormatCodeFromString codeString={section.content} />
      ) : null}
      {section.type === "markdown" ? (
        <FormatInfoMarkdown info={section.content} />
      ) : null}
    </section>
  );
};
