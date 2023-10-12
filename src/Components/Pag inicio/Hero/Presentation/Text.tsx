import { GiHand } from "react-icons/gi";

export const Text = () => {
  return (
    <>
      <span className="flex items-center p-1">
        Hello <GiHand className="text-yellow-400 ml-1" />,
      </span>
      <h2 className=" text-4xl md:text-3xl xl:text-4xl font-semibold text-primary">
        I'm Oscar
      </h2>
      <span className="block p-1">Junior Web Developer.</span>
      <span className="p-1 mr-28 md:m-0">
        Technologies{" "}
        <span className="absolute ml-1">{/* <TypedReactHooksDemo /> */}</span>
      </span>
    </>
  );
};
