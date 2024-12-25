import registerUser from "@/api/users/registerUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log("Registration Successful:", data);
      navigate("/");
    },
    onError: (error) => {
      console.error("Registration Failed:", error);
    },
  });

  const handleRegister = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const name = formData.get("name");
    const password = formData.get("password");

    mutation.mutate({
      email,
      name,
      password,
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <Input
          name="email"
          className=""
          placeholder="Enter email"
          id="email"
          required
        />
        <Input
          name="name"
          className=""
          placeholder="Enter name"
          id="name"
          required
        />
        <Input
          name="password"
          className=""
          placeholder="Enter password"
          id="password"
          type="password"
          required
        />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;
