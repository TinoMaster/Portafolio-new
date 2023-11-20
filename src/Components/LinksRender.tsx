interface LinksRenderProps {
  links: JSX.Element[];
}

export const LinksRender = ({ links }: LinksRenderProps) => {
  return (
    <ul className="flex gap-3 p-4 text-xs lg:text-sm">
      {links.map((Comp, index) => (
        <li
          key={index}
          className="flex items-center gap-2 hover:cursor-pointer hover:text-slate-400 transition-colors"
        >
          {Comp}
        </li>
      ))}
    </ul>
  );
};
