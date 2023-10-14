import { BlogSection } from "../../../../models/types/Blog";

export const SectionItemBlog = ({ section }: { section: BlogSection }) => {
  return (
    <div className="">
      <h2>{section.title}</h2>
      {section.type === "image" ? (
        <div>
          <img src={section.content} alt="" />
        </div>
      ) : null}
      {section.type === "text" ? <p>{section.content}</p> : null}
      {section.type === "code" ? <p>Soy un codigo</p> : null}
    </div>
  );
};
