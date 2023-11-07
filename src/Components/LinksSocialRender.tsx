import { IconType } from "react-icons";

interface LinkProp {
  Icon: IconType;
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
    <div className="w-full flex justify-center lg:justify-start text-2xl">
      {!linksSocial.length ? (
        <p className="text-base m-1">Pronto...</p>
      ) : (
        linksSocial?.map(({ Icon, url, title }) => (
          <small
            key={title}
            className="m-2 relative hover:cursor-pointer hover:text-primary/90 "
          >
            <Icon
              title={title}
              onClick={() => {
                window.open(url, "_blank");
              }}
              className="text-xl transition-all"
            />
            {showTitle ? (
              <span className="w-full text-center absolute -bottom-6 text-s">
                {title}
              </span>
            ) : null}
          </small>
        ))
      )}
    </div>
  );
};