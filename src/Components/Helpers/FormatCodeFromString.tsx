import { oneDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Suspense, lazy, useEffect, useState } from "react";

const SyntaxHighlighter = lazy(
  () => import("react-syntax-highlighter/dist/cjs/prism-async")
);

export const FormatCodeFromString = ({
  codeString,
}: {
  codeString: string;
}) => {
  const [codeFormatted, setCodeFormatted] = useState<string>("");

  useEffect(() => {
    const functionP = async () => {
      const parserBabel = await import("prettier/plugins/babel");
      const estreePluginModule = await import("prettier/plugins/estree");
      const prettier = await import("prettier/standalone");
      const estreePlugin = estreePluginModule.default;
      prettier
        .format(codeString, {
          parser: "babel-ts",
          plugins: [parserBabel, estreePlugin],
          trailingComma: "es5",
        })
        .then((res) => {
          setCodeFormatted(res);
        });
    };
    functionP();
  }, [codeString]);

  return (
    <Suspense>
      <SyntaxHighlighter language="javascript" style={style}>
        {codeFormatted}
      </SyntaxHighlighter>
    </Suspense>
  );
};
