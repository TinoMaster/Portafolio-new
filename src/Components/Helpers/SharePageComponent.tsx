import { BiSolidShareAlt } from "react-icons/bi";

interface SharePageComponentProps {
  name: string;
  onClick: () => void;
}

export const SharePageComponent = ({
  name,
  onClick,
}: SharePageComponentProps) => {
  return (
    <li
      onClick={onClick}
      className="flex items-center gap-2 hover:cursor-pointer hover:text-slate-400 transition-colors"
    >
      <BiSolidShareAlt /> {name}
    </li>
  );
};
