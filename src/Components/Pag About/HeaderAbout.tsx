export const HeaderAbout = () => {
  return (
    <section className="grid grid-cols-3">
      {/* Hablities card */}
      <article className="col-span-1 flex bg-black/10 rounded-t-md">
        <article className="p-4">
          <h3 className="text-2xl text-white font-semibold">Habilidades</h3>
          <p className="text-gray-300 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            necessitatibus incidunt ut officiis explicabo inventore.
          </p>
        </article>
        <article className="flex flex-wrap justify-between p-4 bg-primary/10 rounded-b-lg rounded-t-md">
          <article className="w-full">
            <h4 className="text-lg text-white font-semibold">
              Frontend Developer
            </h4>
            <p className="text-gray-300 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              necessitatibus incidunt ut officiis explicabo inventore.
            </p>
          </article>
        </article>
      </article>
    </section>
  );
};
