import { Fragment, type ReactNode } from "react";

/**
 * Renders a headline string with {accent}...{/accent} markers as gold spans.
 * Example: "Done {accent}right{/accent}" -> "Done <span class="accent">right</span>"
 */
export function renderAccent(text: string): ReactNode {
  const parts = text.split(/\{accent\}|\{\/accent\}/);
  return parts.map((part, i) => {
    if (part === "") return null;
    // Odd indices fall between the opening and closing markers.
    const isAccent = i % 2 === 1;
    return isAccent ? (
      <span key={i} className="accent">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    );
  });
}
