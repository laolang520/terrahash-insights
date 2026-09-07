import Link from "next/link";
import { StatePanel } from "@/components/ui/state-panel";

export default function NotFound() {
  return (
    <div className="container section">
      <StatePanel
        headingLevel={1}
        title="Page not found"
        description="The requested page does not exist or may have moved."
        action={
          <Link className="state-panel__action" href="/">
            Back to home
          </Link>
        }
      />
    </div>
  );
}
