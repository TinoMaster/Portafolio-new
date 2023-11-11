import { Copyright } from "./Copyright";

export const Footer = () => {
  return (
    <footer className="w-full p-8 text-lightMode bg-primary/5">
      <div className="flex flex-col container">
        {/* <ContactForm /> */}
        <div className="flex justify-center items-center">
          <Copyright />
        </div>
      </div>
    </footer>
  );
};
