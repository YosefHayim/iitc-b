import loginUser from "@/api/users/loginUser";
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
import handleGoogleSignIn from "@/api/googleOAuth";

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
      navigate("/");
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
        <input
          className=""
          placeholder="Enter email"
          name="email"
          id="email"
        ></input>
        <input
          className=""
          placeholder="Enter password"
          name="password"
          id="password"
        ></input>
        <button type="submit">Login</button>
        <button onClick={handleGoogleSignIn}>Sign in with google</button>
      </form>
    </div>
  );
};

export default Login;
