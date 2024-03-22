// prism - oneDark : 그냥 vscode 랑 똑같다!!
// prism - pojoaque : 뭔가 귀여운? 배경화면 질감이 재밌음
// prism - lucario : 귀여움

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from './CustomMarkdown.module.css'

export default function CustomMarkdown({ data }) {
  return (
    <div className={styles.container}>
      <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code(props) {
                  const { children, className, node, inline, ...rest} = props
                  const match = /language-(\w+)/.exec(className || "")
                  return inline ? (
                    // 강조 (``)
                    <code
                      style={{
                        background: "grey",
                        color: "blue",
                        padding: "2px",
                        borderRadius: "3px",
                      }}
                      {...rest}
                    >
                      {children}
                    </code>
                  ) : match ? (
                    // 코드 (```)
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      {...rest}
                    >
                      {String(children)
                        .replace(/\n$/, "")
                        .replace(/\n&nbsp;\n/g, "")
                        .replace(/\n&nbsp\n/g, "")}
                    </SyntaxHighlighter>    
                  ) : (
                    <SyntaxHighlighter
                      style={oneDark}
                      language="textile"
                      PreTag="div"
                      {...rest}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  );
                },
                // 인용문 (>)
                blockquote({ node, children, ...props }) {
                  return (
                    <div
                      style={{
                        background: "#f0f0f0",
                        padding: "1px 15px",
                        borderRadius: "10px",
                      }}
                      {...props}
                    >
                      {children}
                    </div>
                  );
                },
                img({ node, ...props }) {
                  return (
                    <img
                      style={{ maxWidth: "60vw" }}
                      src={props.src.replace("../../../../public/", "/")}
                      alt="MarkdownRenderer__Image"
                      
                    />
                  );
                },
                em({ node, children, ...props }) {
                  return (
                    <span style={{ fontStyle: "italic" }} {...props}>
                      {children}
                    </span>
                  );
                },
              }}
            >
              {data
                .replace(/\n\s\n\s/gi, "\n\n&nbsp;\n\n")
                .replace(/\*\*/gi, "@$_%!^")
                .replace(/@\$_%!\^/gi, "**")
                .replace(/<\/?u>/gi, "*")}
            </ReactMarkdown>
    </div>
  )  
}
