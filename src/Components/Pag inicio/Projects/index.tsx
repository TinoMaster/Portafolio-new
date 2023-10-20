export const SectionProjects = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="w-full font-semibold text-center lg:text-end lg:py-10 text-lg lg:text-xl text-primary">
        Conoce Mis Poyectos
      </h3>
      {/* Proyector de proyectos */}
      <div className="flex justify-center items-center w-full p-10">
        <div className="flex justify-center items-center w-80 h-52 rounded-md shadow-2xl bg-white/5 shadow-primary/10 relative">
          <div className="w-11/12 h-5/6 bg-darkMode">
            <video /* autoPlay loop muted */ className="w-full h-full">
              <source src="/video/tv_noise.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};
