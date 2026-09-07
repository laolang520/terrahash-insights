import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="layout-placeholder" aria-label="Header placeholder">
        <div className="container">
          <p className="placeholder-label">Header — implemented in module 2</p>
        </div>
      </div>
      <main id="main-content" className="site-main" tabIndex={-1}>
        {children}
      </main>
      <div className="layout-placeholder layout-placeholder--footer" aria-label="Footer placeholder">
        <div className="container">
          <p className="placeholder-label">Footer — implemented in module 3</p>
        </div>
      </div>
    </div>
  );
}
