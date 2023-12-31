import { DiJavascript1 } from "react-icons/di";
import { Blog } from "../models/types/Blog";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FcIdea } from "react-icons/fc";
import { AiOutlineAntDesign } from "react-icons/ai";
import { TbBrandVscode } from "react-icons/tb";
import { IconType } from "react-icons";

export const iconsHeadBlog: { [key in Blog["category"]]: IconType } = {
  javascript: DiJavascript1,
  react: FaReact,
  typescript: SiTypescript,
  tailwind: BiLogoTailwindCss,
  curious: FcIdea,
  next: SiNextdotjs,
  node: FaNodeJs,
  ui: AiOutlineAntDesign,
  vsCode: TbBrandVscode,
};
