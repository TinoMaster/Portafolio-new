import { IconType } from "react-icons";

interface LinkProp {
  Icon: IconType;
  url: string;
  title: string;
}
interface LinksSocialProps {
  linksSocial: LinkProp[];
}

export const LinksSocialRender = ({ linksSocial }: LinksSocialProps) => {
  return (
    <div className="w-full md:w-1/2 flex py-2 justify-center lg:justify-start text-2xl">
      {linksSocial?.map(({ Icon, url, title }) => (
        <small key={title} className="m-2">
          <Icon
            title={title}
            onClick={() => {
              window.open(url, "_blank");
            }}
            className="hover:cursor-pointer hover:shadow-md hover:text-primary/90 transition-all rounded-full"
          />{" "}
        </small>
      ))}
    </div>
  );
};
