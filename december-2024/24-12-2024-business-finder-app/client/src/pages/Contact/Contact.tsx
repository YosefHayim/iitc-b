import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Contact = () => {
  const handleContact = () => {

  }
  return <div>
    <h1>Contact Us</h1>
    <form onSubmit={handleContact}>
      <Input className="" placeholder="Email"></Input>
      <Input className="" placeholder="subject"></Input>
      <Input className="" placeholder="message"></Input>
      <Button type="submit">Send</Button>
    </form>
  </div>;
};

export default Contact;
