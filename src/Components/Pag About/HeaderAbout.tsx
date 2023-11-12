import { CardHabilities } from "../CardHabilities";

export const HeaderAbout = () => {
  return (
    <section className="grid grid-cols-3 gap-4">
      {/* Hablities card */}
      <CardHabilities />
      <CardHabilities />
      <CardHabilities />
    </section>
  );
};
