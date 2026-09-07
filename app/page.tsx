import { StatePanel } from "@/components/ui/state-panel";

export default function HomePage() {
  return (
    <div className="container section">
      <div className="reading-width">
        <p className="placeholder-label">Module 1 · Public Layout</p>
        <h1>TerraHash Energy Hong Kong</h1>
        <p>Connecting Clean Energy with Trusted Digital Infrastructure</p>
        <p>
          TerraHash Energy Inc is currently represented here through a development-stage Hong Kong
          website shell. Confirmed focus areas are energy storage, smart energy and blockchain
          infrastructure research. Any licensing, regulated-service, partnership, project, market,
          financial or address details not expressly verified remain pending confirmation and are not
          presented as facts.
        </p>
      </div>
      <StatePanel
        title="Content area ready"
        description="Dynamic content is intentionally empty at this stage. Hong Kong office address: pending confirmation. Business contact: business@example.com. No unverified market, licensing, project or performance data is published here."
      />
    </div>
  );
}
