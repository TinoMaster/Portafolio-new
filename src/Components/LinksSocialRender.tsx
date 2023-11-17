import { IconType } from "react-icons";

interface LinkProp {
  Icon?: IconType;
  url: string;
  title: string;
}
interface LinksSocialProps {
  linksSocial: LinkProp[];
  showTitle?: boolean;
}

export const LinksSocialRender = ({
  linksSocial,
  showTitle,
}: LinksSocialProps) => {
  return (
    <div className="flex text-2xl">
      {!linksSocial.length ? (
        <p className="text-base m-2">Pronto...</p>
      ) : (
        linksSocial?.map(({ Icon, url, title }) => (
          <small
            key={title}
            onClick={() => {
              window.open(url, "_blank");
            }}
            className="m-2 relative hover:cursor-pointer hover:text-primary/90 "
          >
            {Icon ? (
              <Icon title={title} className="text-2xl transition-all" />
            ) : null}

            {showTitle ? (
              <span className="w-full text-center absolute -bottom-6 text-[7px]">
                {title}
              </span>
            ) : null}
          </small>
        ))
      )}
    </div>
  );
};
