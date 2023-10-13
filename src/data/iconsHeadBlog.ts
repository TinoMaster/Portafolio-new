import { DiJavascript1 } from "react-icons/di";
import { Blog } from "../models/types/Blog";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiAnydesk, SiNextdotjs, SiTypescript } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FcIdea, FcTrademark } from "react-icons/fc";
import { AiOutlineAntDesign } from "react-icons/ai";
import { CgIfDesign } from "react-icons/cg";
import { IconType } from "react-icons";

export const iconsHeadBlog: { [key in Blog["lenguage"]]: IconType } = {
  javascript: DiJavascript1,
  react: FaReact,
  typescript: SiTypescript,
  tailwind: BiLogoTailwindCss,
  curious: FcIdea,
  next: SiNextdotjs,
  node: FaNodeJs,
  me: FcTrademark,
  general: SiAnydesk,
  ui: AiOutlineAntDesign,
  ux: CgIfDesign,
};
