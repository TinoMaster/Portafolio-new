import ReactMarkDown from "react-markdown";

export const FormatInfoMarkdown = ({ info }: { info: string }) => {
  return (
    <section style={{ whiteSpace: "pre-wrap" }}>
      <ReactMarkDown>{info}</ReactMarkDown>
    </section>
  );
};
