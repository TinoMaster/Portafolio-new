import { linksSocial } from "../data/linksSocial";
import { Input } from "./Imput";
import { LinksSocialRender } from "./LinksSocialRender";

export const ContactUs = () => {
  return (
    <section className="text-gray-300 body-font relative bg-black/5 z-20 py-24">
      <div className="container px-5 py-14">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-white">
            Contactame
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A que esperas 👇
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400"
                >
                  Nombre
                </label>
                <Input type="text" id="name" name="name" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  Correo
                </label>
                <Input type="email" id="email" name="email" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-third/80 border-0 py-2 px-8 focus:outline-none hover:bg-third rounded text-lg">
                Enviar
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a href="mailto:ommallono@gmail.com" className="text-third">
                ommallono@gmail.com
              </a>
              <p className="leading-normal my-5">
                Italia
                <br />
                Francavilla al Mare
              </p>
              <div className="flex justify-center">
                <LinksSocialRender linksSocial={linksSocial} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
