import { TextSectionProps } from "../../../../models/types/SectionBlogHome";

export const TextSection = ({ title, description }: TextSectionProps) => {
  return (
    <div className="w-full lg:w-1/2">
      <h3 className="font-semibold text-center py-5 text-lg lg:text-xl">
        {title}
      </h3>
      <p className="font-light text-center">{description}</p>
    </div>
  );
};
