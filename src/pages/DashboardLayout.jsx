import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import ThemeToggle from '../components/ThemeToggle';
import DashboardContent from './DashboardContent';

const navOptions = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Jobs', path: '/dashboard/jobs' },
  { label: 'Add Job', path: '/dashboard/add-job' },
  { label: 'Jobs Provided', path: '/dashboard/jobs-provided' },
  { label: 'Available', path: '/dashboard/available' },
];

function DashboardLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [jobs, setJobs] = useState([]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background-color)' }}>
      <nav style={{ width: 250, background: 'var(--background-secondary-color)', padding: 32, boxShadow: '2px 0 16px #e0e0e0', borderRadius: '0 24px 24px 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: 40, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <Logo />
          {/* Sidebar (hamburger) icon */}
          <button
            onClick={() => setSidebarOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              marginLeft: 16,
              cursor: 'pointer',
              fontSize: 28,
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Open sidebar"
          >
            <span style={{ display: 'block', width: 28 }}>
              <div style={{ height: 4, background: 'var(--primary-500)', margin: '5px 0', borderRadius: 2 }}></div>
              <div style={{ height: 4, background: 'var(--primary-500)', margin: '5px 0', borderRadius: 2 }}></div>
              <div style={{ height: 4, background: 'var(--primary-500)', margin: '5px 0', borderRadius: 2 }}></div>
            </span>
          </button>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
          {navOptions.map(opt => (
            <li key={opt.label} style={{ marginBottom: 24 }}>
              <Link
                to={opt.path}
                style={{
                  display: 'block',
                  color: location.pathname === opt.path ? '#fff' : 'var(--primary-500)',
                  background: location.pathname === opt.path ? 'var(--primary-500)' : 'transparent',
                  padding: '12px 20px',
                  borderRadius: 12,
                  fontWeight: 600,
                  fontSize: 18,
                  textDecoration: 'none',
                  boxShadow: location.pathname === opt.path ? '0 2px 8px #b2dfdb' : 'none',
                  transition: 'all 0.2s',
                }}
              >
                {opt.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Slide-out sidebar overlay */}
      {sidebarOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.3)',
          zIndex: 100,
        }}
          onClick={() => setSidebarOpen(false)}
        >
          <div
            style={{
              width: 300,
              height: '100%',
              background: 'var(--background-secondary-color)',
              boxShadow: '2px 0 16px #e0e0e0',
              padding: 32,
              position: 'absolute',
              left: 0,
              top: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSidebarOpen(false)}
              style={{ alignSelf: 'flex-end', background: 'none', border: 'none', fontSize: 28, cursor: 'pointer', marginBottom: 24 }}
              aria-label="Close sidebar"
            >
              ×
            </button>
            <h2 style={{ marginBottom: 32, fontWeight: 700, color: 'var(--primary-500)' }}>Menu</h2>
            <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
              {navOptions.map(opt => (
                <li key={opt.label} style={{ marginBottom: 24 }}>
                  <Link
                    to={opt.path}
                    style={{
                      display: 'block',
                      color: location.pathname === opt.path ? '#fff' : 'var(--primary-500)',
                      background: location.pathname === opt.path ? 'var(--primary-500)' : 'transparent',
                      padding: '12px 20px',
                      borderRadius: 12,
                      fontWeight: 600,
                      fontSize: 18,
                      textDecoration: 'none',
                      boxShadow: location.pathname === opt.path ? '0 2px 8px #b2dfdb' : 'none',
                      transition: 'all 0.2s',
                    }}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {opt.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <main style={{ flex: 1, padding: '48px 0', background: 'var(--background-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div style={{ width: '100%', maxWidth: 1200, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32, position: 'relative', minHeight: 60 }}>
          <h1 style={{ fontWeight: 900, fontSize: 36, color: 'var(--primary-500)', letterSpacing: 2, textAlign: 'center', flex: 1, margin: 0, textShadow: '0 2px 8px #b2dfdb55' }}>Dashboard</h1>
          <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
            <ThemeToggle />
          </div>
        </div>
        <DashboardContent jobs={jobs} setJobs={setJobs} />
      </main>
    </div>
  );
}

export default DashboardLayout;