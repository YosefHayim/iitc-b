import sendEmail from "@/api/users/sendEmail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Alert, AlertTitle } from "@/components/ui/alert";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const mutation = useMutation({
    mutationFn: sendEmail,
    onSuccess: (data) => {
      console.log("Email Sent:", data);
    },
    onError: (error) => {
      console.error("Error Sending Email:", error.message);
    },
  });

  const handleContact = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      email: formData.get("email"),
      name: formData.get("name"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    mutation.mutate(payload);
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 2000);
  };

  return (
    <div>
      <h1 className="text-[4em] text-white">Contact Us</h1>
      <form
        onSubmit={handleContact}
        className="flex flex-col items-start justify-center w-full gap-[1em]"
      >
        <Input
          name="name"
          className="bg-white focus:border-none focus:outline-none"
          placeholder="Enter name"
          required
        />
        <Input
          name="email"
          className="bg-white"
          placeholder="Enter email"
          required
        />
        <Input
          name="subject"
          className="bg-white"
          placeholder="Enter subject"
          required
        />
        <Input
          name="message"
          className="bg-white"
          placeholder="Enter message"
          required
        />
        <Button
          type="submit"
          className="w-full transition ease-in duration-[5000ms] hover:bg-white hover:text-black font-bText shadow-statShadow"
        >
          Send
        </Button>
      </form>
      <Alert className={isSent ? "mt-[1em] text-center" : "hidden"}>
        <AlertTitle>Message has been successfully sent.</AlertTitle>
      </Alert>
    </div>
  );
};

export default Contact;
