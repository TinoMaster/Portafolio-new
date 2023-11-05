import { BlogCategory } from "../models/types/Blog";

export const whatColorIs: (category: BlogCategory) => string = (category) => {
  let result = "";
  switch (category) {
    case "javascript":
      result = "shadow shadow-[#F7E025]/50 text-[#F7E025]";
      break;
    case "typescript":
      result = "shadow-md shadow-[#377CC8]/50 text-[#377CC8]";
      break;
    case "react":
      result = "shadow shadow-[#66DBFB] text-[#66DBFB]";
      break;
    case "next":
      result = "shadow shadow-[#ffffff] text-[#ffffff]";
      break;
    case "node":
      result = "shadow shadow-[#8FC708] text-[#8FC708]";
      break;
    case "ui":
      result = "shadow shadow-[#EF237B] text-[#EF237B]";
      break;
    case "tailwind":
      result = "shadow shadow-[#3EBFF8] text-[#3EBFF8]";
      break;
    case "curious":
      result = "shadow shadow-[#2A2A2A] text-[#2A2A2A]";
      break;
    case "vsCode":
      result = "shadow shadow-[#F7E025] text-[#F7E025]";
      break;
  }
  return result;
};
