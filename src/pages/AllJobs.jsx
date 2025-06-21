import React from 'react';

function AllJobs({ jobs }) {
  return (
    <section style={{ width: '100%', maxWidth: 800, margin: '0 auto', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px #b2dfdb33', padding: 40 }}>
      <h2 style={{ color: '#2cb1bc', marginBottom: 24, textAlign: 'center' }}>All Jobs</h2>
      {jobs.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888' }}>No jobs added yet.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--primary-100)' }}>
              <th style={{ padding: 12, borderRadius: 8 }}>Position</th>
              <th style={{ padding: 12, borderRadius: 8 }}>Company</th>
              <th style={{ padding: 12, borderRadius: 8 }}>Location</th>
              <th style={{ padding: 12, borderRadius: 8 }}>Status</th>
              <th style={{ padding: 12, borderRadius: 8 }}>Type</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: 12 }}>{job.position}</td>
                <td style={{ padding: 12 }}>{job.company}</td>
                <td style={{ padding: 12 }}>{job.jobLocation}</td>
                <td style={{ padding: 12 }}>{job.jobStatus}</td>
                <td style={{ padding: 12 }}>{job.jobType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default AllJobs;