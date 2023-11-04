import { Links } from "./Links";
import { Copyright } from "./Copyright";
import { ContactForm } from "./Contact Form/ContactForm";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-wrap p-8 items-center text-lightMode font-semibold text-lg rounded-t-lg bg-primary/5">
      <ContactForm />
      <Copyright />
      <Links />
    </footer>
  );
};
