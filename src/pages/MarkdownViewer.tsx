// components/MarkdownViewer.tsx

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownViewerProps {
    src: string; // path to .md file in /public, like "/docs/temporal-cryptophysics.md"
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ src }) => {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        fetch(src)
            .then((res) => res.text())
            .then(setContent)
            .catch(() => setContent("⚠️ Failed to load markdown file."));
    }, [src]);

    return <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>;
};

export default MarkdownViewer;
