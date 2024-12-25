import registerUser from "@/api/users/registerUser";
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
        <input
          name="email"
          className=""
          placeholder="Enter email"
          id="email"
          required
        />
        <input
          name="name"
          className=""
          placeholder="Enter name"
          id="name"
          required
        />
        <input
          name="password"
          className=""
          placeholder="Enter password"
          id="password"
          type="password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
