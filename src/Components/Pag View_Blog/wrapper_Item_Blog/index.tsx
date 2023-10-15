import { SectionItemBlog } from "./SectionItemBlog";
import { ButtonBack } from "./ButtonBack";
import { Header } from "./Header";
import { Blog } from "../../../models/types/Blog";

export const WrapperItemBlog = ({ itemBlog }: { itemBlog: Blog }) => {
  return (
    <div className="mt-20 max-w-720p m-auto p-2 text-slate-400 font-light">
      <ButtonBack />
      <Header
        title={itemBlog.title}
        category={itemBlog.category}
        date={itemBlog.date}
        description={itemBlog.description}
        image={itemBlog.image}
      />
      {itemBlog.sections.map((section) => (
        <SectionItemBlog key={section.id} section={section} />
      ))}
    </div>
  );
};