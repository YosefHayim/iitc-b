import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Register = () => {

  const handleRegister = () => {

  }

  return (
    <div>
    <h1>Register</h1>
    <form onSubmit={handleRegister}>
      <Input className="" placeholder="Email"></Input>
      <Input className="" placeholder="Password"></Input>
      <Button type="submit">Register</Button>
    </form>
  </div>
  )
};

export default Register;
