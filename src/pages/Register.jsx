import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register() {
  const [form, setForm] = useState({ name: '', lastName: '', location: '', email: '', password: '' });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // handle register logic
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <Logo />
        <h4>Create Your Account</h4>
        <div className="form-row">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block" style={{ marginTop: 24 }}>Register</button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">Login</Link>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;