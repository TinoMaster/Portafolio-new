import { Colors } from "./Color";

export interface SectionBlogHome {
  title: string;
  description: string;
  img: string;
  color: Colors;
  reverse: boolean;
}

export interface SvgSectionProps
  extends Pick<SectionBlogHome, "img" | "color"> {}

export interface TextSectionProps
  extends Pick<SectionBlogHome, "title" | "description"> {}
