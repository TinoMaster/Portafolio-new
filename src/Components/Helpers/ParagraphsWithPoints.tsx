interface DescriptionProjectProps {
  description: string;
  pointers: string[];
}

export const ParagraphsWithPoints = ({
  description,
  pointers,
}: DescriptionProjectProps) => {
  return (
    <>
      <p className="py-2 leading-relaxed">{description}</p>
      <ul>{pointers?.map((point, index) => <li key={index} className="pl-4">{point}</li>)}</ul>
    </>
  );
};
