import registerUser from "@/api/users/registerUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import SignUpImg from "/images/sign-up-page-img.svg";
import { FcGoogle } from "react-icons/fc";
import { inputStyle } from "@/utils/stylesWarehouse";
import loginUser from "@/api/users/loginUser";

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

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error("Login Failed:", error);
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
    loginMutation.mutate({ email, password });
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-[4em] text-white text-center">Sign Up</h1>
      <div>
        <div className="bg-black rounded-[1em] p-[1em] ">
          <div className="flex">
            <div className="w-[350px] flex items-center">
              <img src={SignUpImg} alt="" className="rounded-[1em]" />
            </div>
            <div className="flex rounded-[1em] p-[1em]">
              <form
                onSubmit={handleRegister}
                className="flex flex-col items-start justify-center gap-[0.5em]"
              >
                <Label htmlFor="email" className="text-white">
                  Email Address
                </Label>
                <Input
                  name="email"
                  className={`${inputStyle}`}
                  placeholder="Enter email"
                  id="email"
                  required
                />
                <Label htmlFor="name" className="text-white">
                  First name
                </Label>
                <Input
                  name="name"
                  className={`${inputStyle}`}
                  placeholder="Enter name"
                  id="name"
                  required
                />
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <Input
                  name="password"
                  className={`${inputStyle}`}
                  placeholder="Enter password"
                  id="password"
                  type="password"
                  required
                />
                <Label htmlFor="re-password" className="text-white">
                  Re-enter Password
                </Label>
                <Input
                  name="re-password"
                  className={`${inputStyle}`}
                  placeholder="Re-enter password"
                  id="re-password"
                  type="re-password"
                  required
                />
                <div className="flex items-center w-full justify-center">
                  <Label
                    htmlFor="terms"
                    className="text-white flex items-center space-x-2 w-full"
                  >
                    <Checkbox id="terms" className="bg-white" />
                    <p>I Agree to terms</p>
                  </Label>
                </div>
                <Button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 transition ease-in duration-[5000ms] hover:bg-black hover:text-white text-black font-bText shadow-statShadow bg-white"
                >
                  Register
                </Button>
                <Button className="w-full flex items-center justify-center gap-2 transition ease-in duration-[5000ms] hover:bg-black hover:text-white text-black font-bText shadow-statShadow bg-white">
                  <FcGoogle className="text-lg" />
                  Sign up with Google
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
