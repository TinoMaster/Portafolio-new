import { features } from "../data/feautures";

export const Features = () => {
  return (
    <section className="py-24 bg-slate-700/5">
      <div className="gradient" />
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-300 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-secondary/80 text-3xl font-semibold sm:text-4xl">
            Razones para contratar mis servicios
          </h3>
          <p className="mt-3">
            Ofrezco soluciones digitales excepcionales y personalizadas que no
            solo cumplen con los estandares, sino que también superan
            expectativas
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 grid-cols-2 lg:grid-cols-3 text-xs sm:text-base">
            {features.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <div className="w-12 h-12 mx-auto bg-white text-green-800 rounded-full flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h4 className="text-base sm:text-lg text-secondary/80 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
