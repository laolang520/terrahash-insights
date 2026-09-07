export default function Loading() {
  return (
    <div className="container section" aria-busy="true" aria-label="Loading content">
      <div className="skeleton" style={{ width: "180px", height: "18px", marginBottom: "16px" }} />
      <div className="skeleton" style={{ width: "min(100%, 620px)", height: "52px", marginBottom: "16px" }} />
      <div className="skeleton" style={{ width: "min(100%, 760px)", height: "120px" }} />
    </div>
  );
}
