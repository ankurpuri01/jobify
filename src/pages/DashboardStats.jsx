import React from 'react';

function DashboardStats({ jobs }) {
  const total = jobs.length;
  const pending = jobs.filter(j => j.jobStatus === 'pending').length;
  const interview = jobs.filter(j => j.jobStatus === 'interview').length;
  const declined = jobs.filter(j => j.jobStatus === 'declined').length;
  const accepted = jobs.filter(j => j.jobStatus === 'accepted').length;

  return (
    <section style={{ width: '100%', maxWidth: 650, margin: '0 auto', marginBottom: 32, background: 'var(--background-secondary-color, #f8fafd)', borderRadius: 24, boxShadow: '0 4px 32px #b2dfdb22', padding: '32px 12px 24px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ fontWeight: 800, fontSize: 28, color: 'var(--primary-500)', marginBottom: 6, letterSpacing: 1 }}>Overview</h2>
      <p style={{ color: '#888', fontSize: 16, marginBottom: 24, textAlign: 'center', maxWidth: 480 }}>Track your job search progress at a glance. See your total jobs and their current status below.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 18, width: '100%' }}>
        <div style={{ background: 'linear-gradient(90deg, #2cb1bc 60%, #38bec9 100%)', color: '#fff', borderRadius: 18, padding: '20px 0', boxShadow: '0 4px 24px #b2dfdb33', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 110 }}>
          <span style={{ fontSize: 32, fontWeight: 700, marginBottom: 6 }}>📋</span>
          <span style={{ fontSize: 24, fontWeight: 800 }}>{total}</span>
          <span style={{ fontSize: 15, opacity: 0.93, fontWeight: 500 }}>Total Jobs</span>
        </div>
        <div style={{ background: '#fff', color: '#2cb1bc', borderRadius: 18, padding: '20px 0', boxShadow: '0 4px 24px #b2dfdb33', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 110 }}>
          <span style={{ fontSize: 32, fontWeight: 700, marginBottom: 6 }}>⏳</span>
          <span style={{ fontSize: 24, fontWeight: 800 }}>{pending}</span>
          <span style={{ fontSize: 15, opacity: 0.93, fontWeight: 500 }}>Pending</span>
        </div>
        <div style={{ background: '#fff', color: '#38bec9', borderRadius: 18, padding: '20px 0', boxShadow: '0 4px 24px #b2dfdb33', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 110 }}>
          <span style={{ fontSize: 32, fontWeight: 700, marginBottom: 6 }}>💼</span>
          <span style={{ fontSize: 24, fontWeight: 800 }}>{interview}</span>
          <span style={{ fontSize: 15, opacity: 0.93, fontWeight: 500 }}>Interview</span>
        </div>
        <div style={{ background: '#fff', color: '#e57373', borderRadius: 18, padding: '20px 0', boxShadow: '0 4px 24px #b2dfdb33', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 110 }}>
          <span style={{ fontSize: 32, fontWeight: 700, marginBottom: 6 }}>❌</span>
          <span style={{ fontSize: 24, fontWeight: 800 }}>{declined}</span>
          <span style={{ fontSize: 15, opacity: 0.93, fontWeight: 500 }}>Declined</span>
        </div>
        <div style={{ background: '#fff', color: '#43a047', borderRadius: 18, padding: '20px 0', boxShadow: '0 4px 24px #b2dfdb33', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 110 }}>
          <span style={{ fontSize: 32, fontWeight: 700, marginBottom: 6 }}>✅</span>
          <span style={{ fontSize: 24, fontWeight: 800 }}>{accepted}</span>
          <span style={{ fontSize: 15, opacity: 0.93, fontWeight: 500 }}>Accepted</span>
        </div>
      </div>
    </section>
  );
}

export default DashboardStats;
