import { useParams } from "react-router-dom";
import { Blog } from "../../../../models/types/Blog";
import useViewBlog from "../../../../Hooks/useViewBlog";
import { SectionItemBlog } from "./SectionItemBlog";

export const WrapperItemBlog = () => {
  const params = useParams<{ id: Blog["id"] }>();
  const { id } = params;
  const { itemBlog } = useViewBlog(id || "");

  return (
    <div className="mt-20 max-w-720p m-auto p-2 text-slate-400">
      {/* <span className="text-xs">{itemBlog.date}</span>
      <h1 className="text-2xl">{itemBlog.title}</h1>
      <p className="font-light">{itemBlog.description}</p>
      <div className="">
        <img src={itemBlog.image} alt="" />
      </div> */}
      {itemBlog.sections.map((section) => (
        <SectionItemBlog key={section.id} section={section} />
      ))}
    </div>
  );
};
