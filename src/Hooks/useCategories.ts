import { useEffect, useRef, useState } from "react";

export const useCategories = () => {
  const [width, setWhidth] = useState(0);
  const categoriesCarousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (categoriesCarousel.current) {
      setWhidth(
        categoriesCarousel.current.scrollWidth -
          categoriesCarousel.current.offsetWidth
      );
    }
  }, []);

  return { width, categoriesCarousel };
};
