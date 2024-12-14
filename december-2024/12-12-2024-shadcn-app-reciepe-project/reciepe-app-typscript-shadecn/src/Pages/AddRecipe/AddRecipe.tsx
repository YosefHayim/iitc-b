import { pageDefaultStyle } from "@/components/Home/Home";
import Logo from "@/components/Logo/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddRecipe = () => {
  return (
    <div className={`${pageDefaultStyle} text-[0.8em]`}>
      <Logo />
      <form className="flex flex-col items-center gap-[0.5em]">
        <Input placeholder="Recipe name" />
        <Input placeholder="Category name" />
        <Input placeholder="Description" />
        <Input placeholder="Image path" />
        <Input placeholder="Prep time..." />
        <Input placeholder="Ingredients..." />
        <Button type="submit">Add Recipe</Button>
      </form>
    </div>
  );
};

export default AddRecipe;
