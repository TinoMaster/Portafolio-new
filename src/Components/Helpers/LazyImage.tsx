import { useEffect, useRef, useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
}

export function LazyImage({ src, alt }: LazyImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleIntersection: IntersectionObserverCallback = (
    entries,
    observer
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && imgRef.current && isLoading) {
        const img = imgRef.current;
        img.src = src;
        img.alt = alt;
        setIsLoading(false);
        observer.unobserve(img);
      }
    });
  };

  const handleImageLoad = () => {
    // La imagen se ha cargado por completo, puedes realizar acciones adicionales aquí si es necesario
  };

  return (
    <div
      className="w-full h-full"
      style={{ position: "relative", display: "inline-block" }}
    >
      {isLoading && (
        <div className="w-full h-full min-h-[200px] bg-black/30 absolute flex justify-center items-center rounded-md">
          <p>Cargando...</p>
        </div>
      )}
      <img
        ref={imgRef}
        alt={alt}
        className="w-full h-full object-cover"
        onLoad={handleImageLoad}
      />
    </div>
  );
}
