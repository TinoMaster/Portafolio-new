import { useTranslation } from "react-i18next";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const contactMethods = [
  {
    icon: <FaLinkedin />,
    i18: "first",
    href: "https://www.linkedin.com/in/oscarmarcosmallon/",
  },
  {
    icon: <FaTwitter />,
    i18: "second",
    href: "https://twitter.com/Oscar16015874/",
  },
];

export const ContactUs = () => {
  const [t] = useTranslation("global");
  return (
    <section className="text-gray-300 body-font relative bg-black/5 z-20 py-24">
      <div className="flex flex-wrap container px-2 lg:px-0">
        <section className="py-14 md:px-6 lg:px-0">
          <div className="text-gray-300 gap-12 lg:flex">
            <div className="max-w-md m-auto">
              <h3 className="text-gray-50 text-3xl text-center lg:text-start font-semibold sm:text-4xl">
                {t("contactsHome.title")}
              </h3>
              <p className="mt-3 text-center lg:text-start text-gray-300 opacity-80">
                {t("contactsHome.subtitle")}
              </p>
            </div>
            <div>
              <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:mt-0">
                {contactMethods.map((item, idx) => (
                  <li
                    key={idx}
                    className="space-y-3 py-6 md:max-w-sm md:py-0 flex flex-col justify-center items-center lg:items-start lg:border-l md:px-3 md:w-1/2"
                  >
                    <div className="w-8 h-8 rounded-full border flex items-center justify-center text-gray-300">
                      {item.icon}
                    </div>
                    <h4 className="text-gray-50 text-lg font-medium xl:text-xl">
                      {t(`contactsHome.${item.i18}.title`)}
                    </h4>
                    <p className="text-center text-gray-300 opacity-80 px-5 lg:text-start md:px-0 min-h-[100px]">
                      {t(`contactsHome.${item.i18}.description`)}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      className="flex items-center gap-1 text-sm text-orange-600 duration-150 hover:text-orange-500 font-medium"
                    >
                      {t(`contactsHome.${item.i18}.button`)}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center justify-center">
          <p className="text-sm opacity-70">{t("contactsHome.or")}</p>
          <div className="py-10">
            <a
              href="mailto:ommallono@gmail.com"
              className="text-gray-300 border border-slate-200 hover:border-third transition-colors py-3 px-6 rounded-full"
            >
              {t("contactsHome.email")}
            </a>
          </div>
          <p className="leading-normal my-5 text-center">
            {t("contactsHome.country")}
            <br />
            Francavilla al Mare
          </p>
        </section>
      </div>
    </section>
  );
};
