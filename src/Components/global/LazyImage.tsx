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
      threshold: 0.1,
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
    <div style={{ position: "relative", display: "inline-block" }}>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <p>Cargando...</p>
        </div>
      )}
      <img
        ref={imgRef}
        alt=""
        style={{ opacity: isLoading ? 0 : 1 }}
        onLoad={handleImageLoad}
      />
    </div>
  );
}
