import loginUser from "@/api/users/loginUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  setId,
  setName,
  setPlan,
  setProfilePicUser,
} from "@/store/slices/userSlice";

const Login = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log(data);
      Cookies.set("cookie", data.cookie, { expires: 1 });
      const decoded = jwtDecode(data.cookie);
      dispatch(setId(decoded.id));
      dispatch(setName(decoded.name));
      dispatch(setProfilePicUser(decoded.profileImg));
      dispatch(setPlan(decoded.plan));

      // navigate("/");
    },
    onError: (error) => {
      console.error("Login Failed:", error);
    },
  });

  const handleLogin = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    mutation.mutate({
      email,
      password,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input
          className=""
          placeholder="Enter email"
          name="email"
          id="email"
        ></Input>
        <Input
          className=""
          placeholder="Enter password"
          name="password"
          id="password"
        ></Input>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
