export const LoadingPage = () => {
  return (
    <div className="w-full min-h-[50vh] relative">
      <section className="max-w-720p m-auto flex flex-wrap relative flex-row-reverse w-full h-full items-center justify-center py-10 md:px-10">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-60 h-60 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2">
            <div className="animate-spin border-t-4 border-blue-500 border-solid w-full h-full rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col w-full text-2xl md:w-1/2 md:text-2xl xl:text-2xl mt-8 md:mt-0 justify-center items-center md:items-start p-2 lg:p-0">
          {/* Aquí podrías agregar algún texto de carga, si lo deseas */}
        </div>
      </section>
    </div>
  );
};
