export const CardHabilities = () => {
  return (
    <article className="col-span-3 lg:col-span-1 grid grid-cols-2 rounded-md min-h-[250px] bg-black/50 relative -top-28">
      <article className="p-4">
        <h3 className="text-lg text-white font-semibold">Habilidades</h3>
        <p className="text-gray-300 text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          necessitatibus incidunt ut officiis explicabo inventore.
        </p>
      </article>
      <article className="flex p-4 bg-black/10 shadow-inner shadow-black/10 rounded-b-lg rounded-t-md">
        <article className="w-full">
          <h4 className="text-lg font-semibold">Frontend</h4>
          <ul className="text-xs">
            <li className="mt-2">HTML</li>
            <li className="mt-2">CSS</li>
            <li className="mt-2">JavaScript</li>
            <li className="mt-2">React</li>
          </ul>
        </article>
      </article>
    </article>
  );
};
