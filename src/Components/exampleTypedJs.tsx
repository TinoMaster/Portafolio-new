import { useRef, useEffect } from "react";
import Typed from "typed.js";

export const TypedReactHooksDemo = () => {
  const el = useRef<HTMLSpanElement | null>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "TAILWIND",
        "REACTJS",
        "NODEJS",
        "MONGODB",
        "EXPRESS",
        "DOCKER",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      loopCount: Infinity,
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.reset();
      }
    };
  }, []);

  return (
    <>
      <span className="text-primary ml-1  font-semibold lg:text-2xl" ref={el} />
    </>
  );
};
