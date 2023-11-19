import { useEffect } from "react";
import { dataSEOPrincipal } from "../data/SEO.data";

interface useSeoProps {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
}

const defaultElements = {
  description: dataSEOPrincipal.description,
  image: dataSEOPrincipal.image,
  keywords: dataSEOPrincipal.keywords,
};

export const useSEO = ({
  title,
  description = defaultElements.description,
  image = defaultElements.image,
  keywords = defaultElements.keywords,
}: useSeoProps) => {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.createElement("meta");
    const metaImage = document.createElement("meta");
    const metaKeywords = document.createElement("meta");
    metaDescription.name = "description";
    metaKeywords.name = "keywords";
    metaDescription.content = description;
    metaImage.content = image;
    metaKeywords.content = keywords;
    metaImage.setAttribute("property", "og:image");
    document.head.appendChild(metaDescription);
    document.head.appendChild(metaImage);
    document.head.appendChild(metaKeywords);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaImage);
      document.title = "TinoMaster | Portafolio";
      document.head.removeChild(metaKeywords);
    };
  }, [title, description, image, keywords]);
};
