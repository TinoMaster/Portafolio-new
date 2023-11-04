import ReactMarkDown from "react-markdown";

export const FormatInfoMarkdown = ({ info }: { info: string }) => {
  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      <ReactMarkDown>{info}</ReactMarkDown>
    </div>
  );
};
