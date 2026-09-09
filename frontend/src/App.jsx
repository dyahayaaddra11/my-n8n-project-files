import { useState } from 'react';

const modules = [
  { id: 'dashboard', label: 'Dashboard', icon: '▦' },
  { id: 'requests', label: 'Requests', icon: '↗' },
  { id: 'automation', label: 'Automation', icon: '⚡' },
  { id: 'settings', label: 'Settings', icon: '⚙' },
];

function App() {
  const [active, setActive] = useState('dashboard');

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">P</div>
          <div>
            <strong>Project System</strong>
            <span>Frontend</span>
          </div>
        </div>

        <nav aria-label="Main navigation">
          {modules.map((item) => (
            <button
              key={item.id}
              className={active === item.id ? 'nav-item active' : 'nav-item'}
              onClick={() => setActive(item.id)}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <span className="status-dot" /> System foundation ready
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Project workspace</p>
            <h1>{modules.find((item) => item.id === active)?.label}</h1>
          </div>
          <button className="profile">YD</button>
        </header>

        {active === 'dashboard' ? <Dashboard /> : <ModulePlaceholder name={modules.find((item) => item.id === active)?.label} />}
      </main>
    </div>
  );
}

function Dashboard() {
  return (
    <section className="content">
      <div className="hero-card">
        <div>
          <span className="badge">Development v0.1</span>
          <h2>Frontend foundation is ready.</h2>
          <p>
            This first layer establishes the application shell. We will now implement the
            screens and workflows directly from the project requirements.
          </p>
        </div>
        <div className="hero-symbol">✦</div>
      </div>

      <div className="section-heading">
        <div>
          <h2>System modules</h2>
          <p>Core areas prepared for implementation.</p>
        </div>
      </div>

      <div className="cards">
        <InfoCard title="Requests" text="User requests, submissions and operational actions." />
        <InfoCard title="Automation" text="Workflow execution and integration controls." />
        <InfoCard title="Settings" text="Configuration, preferences and system controls." />
      </div>
    </section>
  );
}

function InfoCard({ title, text }) {
  return (
    <article className="info-card">
      <div className="card-icon">•</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="coming-soon">Ready for requirements mapping</span>
    </article>
  );
}

function ModulePlaceholder({ name }) {
  return (
    <section className="content">
      <div className="empty-state">
        <div className="empty-icon">{name?.charAt(0)}</div>
        <h2>{name}</h2>
        <p>This module is intentionally scaffolded. Its final UI will be implemented from the project specifications.</p>
      </div>
    </section>
  );
}

export default App;
