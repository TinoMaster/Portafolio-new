import { SectionItemBlog } from "./SectionItemBlog";
import { ButtonBack } from "./ButtonBack";
import { Header } from "./Header";
import { Blog } from "../../../models/types/Blog";

export const WrapperItemBlog = ({ itemBlog }: { itemBlog: Blog }) => {
  return (
    <div className=" max-w-720p m-auto p-2 text-slate-300 font-normal font-inter">
      {/* <div className="gradient"></div> */}
      <div className="flex flex-col gap-3 mt-20 z-10 relative">
        <ButtonBack />
        <Header
          title={itemBlog.title}
          category={itemBlog.category}
          date={itemBlog.date}
          description={itemBlog.description}
          image={itemBlog.image}
          content={itemBlog.content}
        />
        <div className="flex flex-col gap-3">
          {itemBlog.sections.map((section) => (
            <SectionItemBlog key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};
