import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddBusinessPost = () => {
const handleAddBusiness = () => {

}

  return <div>
    <h1>AddBusinessPost</h1>
    <form onSubmit={handleAddBusiness}>
      <Input className="" placeholder="business name"></Input>
      <Input className="" placeholder="description"></Input>
      <Input className="" placeholder="owner name"></Input>
      <Button type="submit">Add business</Button>
    </form>
  </div>;
};

export default AddBusinessPost;
