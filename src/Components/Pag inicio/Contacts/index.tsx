import { FaHandPointDown } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const contacts = [
  {
    name: "Location",
    description: "Rome,Italy",
    icon: <IoLocationSharp />,
    link: "/",
  },
  {
    name: "Email",
    description: "ommallono@gmail.com",
    icon: <TfiEmail />,
    link: "mailto:ommallono@gmail.com",
  },
];

export const SectionContacts = () => {
  return (
    <div className="flex flex-wrap justify-center w-full m-auto max-w-720p">
      <h2 className="w-full font-semibold text-center lg:py-10 lg:text-xl text-primary">
        CONTACT
      </h2>
      <div className="w-full flex flex-col items-center">
        {/* title */}
        <h3 className="w-full py-2 lg:py-5 text-2xl font-semibold lg:text-xl flex items-center text-center justify-center lg:justify-start">
          Don't hesitate, Contact me{" "}
          <FaHandPointDown className="text-yellow-400 ml-1 hidden lg:flex" />
        </h3>
        {/* Contacts links */}
        <div className="w-full flex flex-wrap">
          {/* Each contact */}
          {contacts?.map((el) => (
            <div
              key={el.name}
              className="flex flex-wrap justify-center lg:justify-start gap-3 items-center py-5 w-full lg:w-[300px] rounded-md"
            >
              {/* Icon */}
              <div className="w-full flex justify-center lg:w-auto">
                <div className="p-3 bg-white/10 rounded-full text-3xl shadow-xl shadow-primary/10 border-2 border-primary/20">
                  {el.icon}
                </div>
              </div>
              {/* indication */}
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-semibold text-lg">{el.name}</span>
                <a
                  href={el.link}
                  className="text-lg text-primary/80 hover:cursor-pointer hover:text-primary/50 transition-all"
                >
                  {el.description}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
