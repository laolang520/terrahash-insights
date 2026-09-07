import type { ReactNode } from "react";

interface StatePanelProps {
  title: string;
  description: string;
  action?: ReactNode;
  headingLevel?: 1 | 2;
}

export function StatePanel({
  title,
  description,
  action,
  headingLevel = 2,
}: StatePanelProps) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section className="state-panel" role="status" aria-live="polite">
      <Heading>{title}</Heading>
      <p>{description}</p>
      {action ? <div>{action}</div> : null}
    </section>
  );
}
