import { knowMyBlog } from "../../../../utils/svgs";

export const KnowMyBlog = () => {
  return (
    <div className="flex flex-wrap">
      {/* Caja imagen */}
      <div className="w-1/2">
        <div className="w-[50vw]">
          <img src={knowMyBlog} alt="" />
        </div>
      </div>
      {/* Caja texto */}
      <div className="w-1/2">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit rem
          odio quia aut excepturi sint dignissimos dicta et beatae temporibus
          eaque cumque facere sunt, error sed consequuntur natus ex labore?
        </p>
      </div>
    </div>
  );
};
