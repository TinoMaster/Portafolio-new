import { LinkSocial } from "../../../models/types/LinksSocial";
interface LinkProps {
  Icon: LinkSocial["icon"];
  link: LinkSocial["url"];
}

export const Link_Social = ({ Icon, link }: LinkProps) => {
  return (
    <p className="m-2">
      <Icon
        onClick={() => {
          window.open(link, "_blank");
        }}
        className="hover:cursor-pointer hover:shadow-md hover:text-primary/90 transition-all rounded-full"
      />{" "}
    </p>
  );
};
