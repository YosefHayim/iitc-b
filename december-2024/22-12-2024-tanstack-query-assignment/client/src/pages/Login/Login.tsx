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
            className="bg-gray-400 placeholder:text-gray-300"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-400 placeholder:text-gray-300"
            placeholder="password..."
          />
        </div>
        <button
          type="submit"
          className="bg-gray-500 hover:text-white p-[0.5em] rounded-[0.2em]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
