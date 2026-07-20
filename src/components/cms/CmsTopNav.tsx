"use client";

type CmsTab = "home" | "blogs" | "case-studies" | "retreats";

const navItems: { key: CmsTab; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "blogs", label: "Blogs" },
  { key: "case-studies", label: "Case Studies" },
  { key: "retreats", label: "Retreats" },
];

type CmsTopNavProps = {
  activeTab: CmsTab;
  onTabChange: (tab: CmsTab) => void;
};

export default function CmsTopNav({
  activeTab,
  onTabChange,
}: CmsTopNavProps) {
  return (
    <header className="cms-topbar">
      <div className="cms-topbar-inner">
        <div className="cms-brand-wrap">
          <div className="cms-brand">
            <span className="cms-brand-mark" aria-hidden="true">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cms-brand-svg"
              >
                <rect
                  x="6"
                  y="6"
                  width="36"
                  height="36"
                  rx="12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <path
                  d="M17 28.5C19.2 31 21.9 32.25 25 32.25C29.95 32.25 33 29.42 33 25.65C33 22.44 30.93 20.54 26.6 19.68L23.95 19.15C21.45 18.63 20.15 17.79 20.15 16.18C20.15 14.16 22.18 12.75 25.18 12.75C27.9 12.75 30.08 13.77 31.96 15.73"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span className="cms-brand-copy">
              <span className="cms-brand-title">Spadosphere CMS</span>
              <span className="cms-brand-subtitle">Admin panel</span>
            </span>
          </div>
        </div>

        <nav className="cms-nav" aria-label="CMS navigation">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`cms-nav-link ${activeTab === item.key ? "is-active" : ""}`}
              onClick={() => onTabChange(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="cms-topbar-actions">
          <form action="/admin/logout" method="post">
            <button type="submit" className="cms-logout-btn">
              Logout
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}