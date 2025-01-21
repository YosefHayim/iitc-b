import loginUser from "@/api/users/loginUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  setEmail,
  setId,
  setName,
  setPlan,
  setProfilePicUser,
} from "@/store/slices/userSlice";
import handleGoogleSignIn from "@/api/googleOAuth";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import SignInImg from "/images/sign-in-page-img.svg";
import { btnStyle, inputStyle } from "@/utils/stylesWarehouse";

const Login = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data: any) => {
      Cookies.set("cookie", data.cookie, { expires: 1 });
      const decoded = jwtDecode(data.cookie);
      console.log(decoded);

      dispatch(setId(decoded.id));
      dispatch(setName(decoded.name));
      dispatch(setProfilePicUser(decoded.profileImg));
      dispatch(setPlan(decoded.plan));
      dispatch(setEmail(decoded.email));
      navigate("/");
    },
    onError: (error: any) => {
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
      <h1 className="text-[4em] text-white text-center">Sign In</h1>
      <div className="flex bg-black rounded-[1em] p-[1em]">
        <div className="w-[350px] bg-gray-800 rounded-[1em]">
          <img src={SignInImg} alt="" className="rounded-[1em]" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-start justify-start  gap-[0.5em]"
          >
            <Label htmlFor="email" className="text-white">
              Email Address
            </Label>
            <Input
              className={`${inputStyle}`}
              placeholder="Enter email"
              name="email"
              id="email"
            ></Input>
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              className={`${inputStyle}`}
              placeholder="Enter password"
              name="password"
              id="password"
            ></Input>
            <Button type="submit" className={`${btnStyle}`}>
              Login
            </Button>
            <Button onClick={handleGoogleSignIn} className={`${btnStyle}`}>
              <FcGoogle className="text-lg" />
              Sign in with Google
            </Button>
          </form>
          <div className="mt-[0.5em]">
            <p>
              Don`t have an account?
              <Link to="/register" className="hover:text-white">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
