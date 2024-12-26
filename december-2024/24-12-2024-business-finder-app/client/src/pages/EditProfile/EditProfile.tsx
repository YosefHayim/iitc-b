import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { inputStyle } from "@/utils/stylesWarehouse";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import updateUserData from "@/api/users/updateUserData";
import { Button } from "@/components/ui/button";

const EditProfile = () => {
  const username = useSelector((state) => state.user.name);
  const profilePic = useSelector((state) => state.user.profileImg);
  const plan = useSelector((state) => state.user.plan);
  const email = useSelector((state) => state.user.email);

  const [imagePreview, setImagePreview] = useState(profilePic);

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log("Base64 URL:", reader.result); // Logs Base64 URL
        setImagePreview(reader.result); // Update preview
      };
      reader.readAsDataURL(file);
    }
  };

  // Simulate click on hidden input
  const handleImageClick = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  const mutation = useMutation({
    mutationFn: updateUserData,
    onSuccess: (data: any) => {
      console.log(data);
    },
    onError: (error: any) => {
      console.error("Login Failed:", error);
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!username || email || password) {
      alert("One of the fields cant be empty");
    }

    mutation.mutate({ username, email, password });
  };

  return (
    <div>
      <h1 className="text-[4em] text-white text-center">Edit Profile</h1>
      <div className="flex items-center justify-center">
        <img
          src={imagePreview}
          alt="Profile Preview"
          className="h-[10em] rounded-[100em] cursor-pointer"
          onClick={handleImageClick} // Open file picker on click
        />
      </div>
      <div>
        <p>Plan: {plan}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-[1em]"
      >
        <Label htmlFor="username">Username</Label>
        <Input
          placeholder={`${username}`}
          className={`${inputStyle}`}
          name="username"
          id="username"
        ></Input>
        <Label htmlFor="email">Change Email Address</Label>
        <Input
          placeholder={`${email}`}
          className={`${inputStyle}`}
          name="email"
          id="email"
        ></Input>
        <Label htmlFor="password">Change Password</Label>
        <Input
          className={`${inputStyle}`}
          placeholder="Change Password"
          name="password"
          id="password"
        ></Input>
        <input
          type="file"
          accept="image/*"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <Button className="w-full flex items-center justify-center gap-2 transition ease-in duration-[5000ms] hover:bg-black hover:text-white text-black font-bText shadow-statShadow bg-white">
          Save
        </Button>
      </form>
    </div>
  );
};

export default EditProfile;
