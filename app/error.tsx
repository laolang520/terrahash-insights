"use client";

import { StatePanel } from "@/components/ui/state-panel";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="container section">
      <StatePanel
        headingLevel={1}
        title="Something went wrong"
        description="The page could not be loaded. No transaction or submission has been made. You can retry safely."
        action={
          <button className="state-panel__action" type="button" onClick={() => reset()}>
            Try again
          </button>
        }
      />
    </div>
  );
}
