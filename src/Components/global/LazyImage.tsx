import { useRef, useEffect, useState } from "react";

interface ManualLazyImageProps {
  src: string;
  alt: string;
}

export const LazyImage = ({ src, alt }: ManualLazyImageProps) => {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Ajusta este valor según tus necesidades
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && imgRef.current) {
          const image = new Image();
          image.src = src;
          image.alt = alt;
          image.onload = handleImageLoad;
          (imgRef.current as HTMLImageElement).src = image.src;
          observer.unobserve(imgRef.current);
          console.log("ahoraaaa");
        }
      }, options);

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        observer.disconnect();
      };
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return (
    <img
      className="w-full h-full object-cover"
      ref={imgRef}
      alt={alt}
      src={src}
      loading={loaded ? "eager" : "lazy"}
    />
  );
};
