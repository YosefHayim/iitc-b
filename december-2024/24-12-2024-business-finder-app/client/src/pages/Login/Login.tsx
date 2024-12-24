import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Login = () => {
  const handleLogin = () => {
    
  }

  return <div>
    <h1>Login</h1>
    <form onSubmit={handleLogin}>
      <Input className="" placeholder="Email"></Input>
      <Input className="" placeholder="Password"></Input>
      <Button type="submit">Login</Button>
    </form>
  </div>;
};

export default Login;
