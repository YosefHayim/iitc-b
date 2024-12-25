import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setId,
  setName,
  setProfilePicUser,
  setPlan,
} from "@/store/slices/userSlice";
import { jwtDecode } from "jwt-decode";

const GoogleCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const exchangeCodeMutation = useMutation({
    mutationFn: async (code) => {
      const response = await fetch("http://localhost:3000/google/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
      if (!response.ok) {
        throw new Error("Failed to exchange code for tokens");
      }
      return response.json(); // Tokens from backend
    },
    onSuccess: (data) => {
      console.log("Tokens received:", data);
      const decoded = jwtDecode(data.id_token); // Decode the ID token
      dispatch(setId(decoded.id));
      dispatch(setName(decoded.name));
      dispatch(setProfilePicUser(decoded.picture));
      dispatch(setPlan(decoded.plan));
      navigate("/"); // Redirect to home or dashboard
    },
    onError: (error) => {
      console.error("Error exchanging code for tokens:", error);
    },
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      exchangeCodeMutation.mutate(code); // Trigger the mutation
    } else {
      console.error("No authorization code found in URL.");
    }
  }, [exchangeCodeMutation]);

  return <div>Processing Google Login...</div>;
};

export default GoogleCallback;
