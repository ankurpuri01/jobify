import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // handle login logic
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <Logo />
        <h4>Login to Jobify</h4>
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
        <button type="submit" className="btn btn-block" style={{ marginTop: 24 }}>Login</button>
        <p>
          Not a member?
          <Link to="/register" className="member-btn">Register</Link>
        </p>
      </form>
    </Wrapper>
  );
}

export default Login;
