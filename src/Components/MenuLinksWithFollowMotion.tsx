import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface LinksProps {
  title: string;
  image: string | undefined;
}

interface LinkProps {
  title: string;
  image: string | undefined;
  selectedLink: string;
  onChangeLink: (index: number) => void;
  index: number;
}

interface MenuLinksWithStylesProps {
  links: LinksProps[];
  selectedLink: string;
  onChangeLink: (index: number) => void;
}

export const MenuLinksWithFollowMotion = ({
  links,
  selectedLink,
  onChangeLink,
}: MenuLinksWithStylesProps) => {
  const [width, setWhidth] = useState(0);
  const element = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (element.current) {
      setWhidth(element.current.scrollWidth - element.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div
      ref={element}
      whileTap={{ cursor: "grabbing" }}
      className="flex lg:justify-center overflow-hidden relative"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex w-max gap-4 lg:gap-7 cursor-grab"
      >
        {[...links]?.map((link, index) => (
          <LinkRender
            key={link.title}
            image={link?.image}
            title={link.title}
            selectedLink={selectedLink}
            onChangeLink={onChangeLink}
            index={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

const LinkRender = ({
  title,
  image,
  selectedLink,
  onChangeLink,
  index,
}: LinkProps) => {
  return (
    <article onClick={() => onChangeLink(index)} className="relative min-w-[150px] flex gap-2 items-center">
      {title === selectedLink ? (
        <motion.div
          layoutId="active"
          className="absolute w-full h-full border-b peer-first:bg-black"
        ></motion.div>
      ) : null}
      {image ? <img src={image} className="w-10 h-10 pb-1" alt="" /> : null}
      <h3 className="text-xs font-semibold">
        {title}
      </h3>
    </article>
  );
};
