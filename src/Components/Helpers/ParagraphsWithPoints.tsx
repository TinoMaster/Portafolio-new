import { useTranslation } from "react-i18next";

interface DescriptionProjectProps {
  project: string;
}

export const ParagraphsWithPoints = ({ project }: DescriptionProjectProps) => {
  const [t] = useTranslation("projects");
  const numberOfPointers = Object.keys(
    t(`${project}.pointers`, { returnObjects: true })
  ).length;

  return (
    <div className="">
      <p className="py-2 leading-relaxed">{t(`${project}.description`)}</p>
      <ul className="space-y-3 mt-3">
        {[...new Array(numberOfPointers)].map((_, index) => (
          <li key={index} className="pl-4 leading-relaxed">
            {t(`${project}.pointers.${index}`)}
          </li>
        ))}
      </ul>
    </div>
  );
};
