import { BlogSection } from "../../models/types/Blog";
import { convertSectionTitle } from "../../utils/convertTilteInId";
import { FormatCodeFromString } from "../Helpers/FormatCodeFromString";
import { FormatInfoMarkdown } from "../Helpers/FormatInfoMarkdown";
import { FormatTextWithLinks } from "../Helpers/FormatTextWithLinks";

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
