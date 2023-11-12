import ReactMarkDown from "react-markdown";

const FormatInfoMarkdown = ({ info }: { info: string }) => {
  return (
    <section style={{ whiteSpace: "pre-wrap" }}>
      <ReactMarkDown>{info}</ReactMarkDown>
    </section>
  );
};

export default FormatInfoMarkdown;
