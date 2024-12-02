import React from 'react';

function login({ handleLoginSubmit }) {
  return (
    <form className="login-form" onSubmit={handleLoginSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit" className="signup-button">Login</button>
    </form>
  );
}

export default login;
