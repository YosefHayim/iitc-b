import sendEmail from "@/api/users/sendEmail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";

const Contact = () => {
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
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleContact}>
        <Input name="name" className="" placeholder="Enter name" required />{" "}
        <Input name="email" className="" placeholder="Enter email" required />
        <Input
          name="subject"
          className=""
          placeholder="Enter subject"
          required
        />
        <Input
          name="message"
          className=""
          placeholder="Enter message"
          required
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default Contact;
