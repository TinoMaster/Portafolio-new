import { LinksSocial } from "../global/Links Social";
import { Copyright } from "./Copyright";
import { ContactForm } from "./Contact Form/ContactForm";

export const Footer = () => {
  return (
    <footer className="w-full p-8 text-lightMode bg-primary/5">
      <div className="flex flex-col container">
        <ContactForm />
        <div className="flex justify-between items-center">
          <Copyright />
          <LinksSocial />
        </div>
      </div>
    </footer>
  );
};
