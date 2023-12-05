import { useTranslation } from "react-i18next";
import { features } from "../data/feautures";

export const Features = () => {
  const [t] = useTranslation("global");
  return (
    <section className="py-24 lg:py-56 bg-slate-700/5">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-300 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-white text-3xl font-semibold sm:text-4xl">
            {t(`features.title`)}
          </h3>
          <p className="mt-3">
            {t(`features.subtitle`)}
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
                  {t(`features.${item.i18}.title`)}
                </h4>
                <p className="leading-relaxed">{t(`features.${item.i18}.description`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
