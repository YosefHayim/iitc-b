import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username..."
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password..."
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
