import { useEffect, useRef, useState } from "react";

export const useNavCategoriesBlog = () => {
  const [width, setWhidth] = useState(0);
  const element = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (element.current) {
      setWhidth(element.current.scrollWidth - element.current.offsetWidth);
    }
  }, []);

  return { width, element };
};
