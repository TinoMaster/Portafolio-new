import { BlogSection } from "../../../models/types/Blog";
import { FormatCodeFromString } from "../../global/FormatCodeFromString";
import { FormatInfoMarkdown } from "../../global/FormatInfoMarkdown";
import { FormatTextWithLinks } from "../../global/FormatTextWithLinks";

export const SectionItemBlog = ({ section }: { section: BlogSection }) => {
  return (
    <div className="lg:text-lg text-sm">
      <h2 className="font-semibold lg:text-xl">{section.title}</h2>
      {section.type === "image" ? (
        <div className="w-full p-2 bg-white/5">
          <img
            src={section.content}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
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
    </div>
  );
};
