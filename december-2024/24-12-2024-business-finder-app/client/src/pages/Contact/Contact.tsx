import sendEmail from "@/api/users/sendEmail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { inputStyle } from "@/utils/stylesWarehouse";
import contactUsImg from "/images/contact-us-page-img.svg";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

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
      <h1 className="text-[4em] text-white text-center">Contact Us</h1>
      <div className="flex bg-black rounded-[1em] p-[1em] gap-[1em]">
        <div>
          <img src={contactUsImg} alt="" className="rounded-[1em]" />
          hi
        </div>
        <div>
          <form
            onSubmit={handleContact}
            className="flex flex-col items-start justify-center w-full gap-[1em] w-[200px]"
          >
            <Label htmlFor="name" className="text-white">
              First name
            </Label>
            <Input
              name="name"
              className={`${inputStyle}`}
              placeholder="Enter name"
              required
            />
            <Label htmlFor="email" className="text-white">
              Email Address
            </Label>
            <Input
              name="email"
              className={`${inputStyle}`}
              placeholder="Enter email"
              required
            />
            <Label htmlFor="subject" className="text-white">
              Subject
            </Label>
            <Input
              name="subject"
              className={`${inputStyle}`}
              placeholder="Enter subject"
              required
            />
            <Label htmlFor="message" className="text-white">
              Message
            </Label>
            <Textarea
              name="message"
              className={`${inputStyle} h-[135px]`}
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
      </div>
    </div>
  );
};

export default Contact;
