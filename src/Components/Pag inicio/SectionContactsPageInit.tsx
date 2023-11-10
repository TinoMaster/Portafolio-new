import { FaHandPointDown } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const contacts = [
  {
    name: "Localizacion",
    description: "Roma, Italia",
    icon: <IoLocationSharp />,
    link: "/",
  },
  {
    name: "Correo",
    description: "ommallono@gmail.com",
    icon: <TfiEmail />,
    link: "mailto:ommallono@gmail.com",
  },
];

const SectionContactsPageInit = () => {
  return (
    <div className="flex flex-wrap justify-center w-full container">
      <h2 className="w-full font-semibold text-center text-lg lg:text-xl text-primary">
        Contacto
      </h2>
      <div className="w-full flex flex-col items-center">
        {/* title */}
        <h3 className="w-full py-2 lg:py-5 font-semibold lg:text-xl flex items-center text-center justify-center">
          No lo dudes, conecta conmigo{" "}
          <FaHandPointDown className="text-yellow-400 ml-1" />
        </h3>
        {/* Contacts links */}
        <div className="w-full flex flex-wrap justify-center">
          {/* Each contact */}
          {contacts?.map((el) => (
            <div
              key={el.name}
              className="flex flex-wrap justify-center gap-3 items-center py-5 w-full lg:w-[300px] rounded-md"
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
                  className="text-lg text-slate-100 hover:cursor-pointer hover:text-primary/50 transition-all"
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

export default SectionContactsPageInit;
