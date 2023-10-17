export const SvgSection = ({ svg }: { svg: string }) => {
  return (
    <div className="w-full lg:w-1/2 overflow-hidden">
      <div className="w-6/12 m-auto bg-gradient-to-tr from-primary/10 to-white/50 rounded-full">
        <img src={svg} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
