import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";

export const FormatCodeFromString = ({
  codeString,
}: {
  codeString: string;
}) => {
  return (
    <SyntaxHighlighter language="javascript" style={style}>
      {codeString}
    </SyntaxHighlighter>
  );
};
