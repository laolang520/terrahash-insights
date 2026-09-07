import { StatePanel } from "@/components/ui/state-panel";

export default function HomePage() {
  return (
    <div className="container section">
      <div className="reading-width">
        <p className="placeholder-label">Module 1 · Public Layout</p>
        <h1>Hong Kong New Energy & Digital Technology Ecosystem</h1>
        <p>
          The shared application shell, responsive container system, accessibility baseline,
          and reusable loading, empty, and error states are now in place. Home-page content
          will be implemented in module 4.
        </p>
      </div>
      <StatePanel
        title="Content area ready"
        description="Dynamic content is intentionally empty at this stage. This verifies the shared empty-state presentation without inserting unverified market data."
      />
    </div>
  );
}
