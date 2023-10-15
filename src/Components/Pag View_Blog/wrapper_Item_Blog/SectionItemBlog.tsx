import { BlogSection } from "../../../models/types/Blog";

export const SectionItemBlog = ({ section }: { section: BlogSection }) => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg">{section.title}</h2>
      {section.type === "image" ? (
        <div className="p-2 bg-white/5">
          <img src={section.content} alt="" className="w-full h-full object-cover rounded-md" />
        </div>
      ) : null}
      {section.type === "text" ? <p>{section.content}</p> : null}
      {section.type === "code" ? <p>Soy un codigo</p> : null}
    </div>
  );
};