import React, { useState } from 'react';

function AddJob({ setJobs, jobs }) {
  const [form, setForm] = useState({
    position: '',
    company: '',
    jobLocation: '',
    jobStatus: '',
    jobType: '',
  });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setJobs([...jobs, form]);
    setForm({ position: '', company: '', jobLocation: '', jobStatus: '', jobType: '' });
  };

  return (
    <section style={{ width: '100%', maxWidth: 520, background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px #b2dfdb33', padding: 40, marginBottom: 32, margin: '0 auto' }}>
      <h3 style={{ marginBottom: 32, color: '#2cb1bc', textAlign: 'center', fontWeight: 700, fontSize: 26, letterSpacing: 1 }}>Add Job</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
          <div className="form-row" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="position" style={{ fontWeight: 500, marginBottom: 6 }}>Position</label>
            <input type="text" id="position" name="position" value={form.position} onChange={handleChange} required className="form-input" style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #b2dfdb', fontSize: 16 }} />
          </div>
          <div className="form-row" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="company" style={{ fontWeight: 500, marginBottom: 6 }}>Company</label>
            <input type="text" id="company" name="company" value={form.company} onChange={handleChange} required className="form-input" style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #b2dfdb', fontSize: 16 }} />
          </div>
          <div className="form-row" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="jobLocation" style={{ fontWeight: 500, marginBottom: 6 }}>Job Location</label>
            <input type="text" id="jobLocation" name="jobLocation" value={form.jobLocation} onChange={handleChange} required className="form-input" style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #b2dfdb', fontSize: 16 }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
          <div className="form-row" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="jobStatus" style={{ fontWeight: 500, marginBottom: 6 }}>Job Status</label>
            <select id="jobStatus" name="jobStatus" value={form.jobStatus} onChange={handleChange} className="form-input" style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #b2dfdb', fontSize: 16, color: form.jobStatus ? '#222' : '#888', minHeight: 48 }}>
              <option value="" disabled>Select job status</option>
              <option value="pending">Pending</option>
              <option value="interview">Interview</option>
              <option value="declined">Declined</option>
              <option value="accepted">Accepted</option>
            </select>
          </div>
          <div className="form-row" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="jobType" style={{ fontWeight: 500, marginBottom: 6 }}>Job Type</label>
            <select id="jobType" name="jobType" value={form.jobType} onChange={handleChange} className="form-input" style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #b2dfdb', fontSize: 16, color: form.jobType ? '#222' : '#888', minHeight: 48 }}>
              <option value="" disabled>Select job type</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="remote">Remote</option>
              <option value="internship">Internship</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-block" style={{ background: 'linear-gradient(90deg, #2cb1bc 60%, #38bec9 100%)', color: '#fff', fontWeight: 700, fontSize: 18, borderRadius: 8, padding: '14px 0', boxShadow: '0 2px 8px #b2dfdb', letterSpacing: 1, border: 'none' }}>Submit</button>
      </form>
    </section>
  );
}

export default AddJob;