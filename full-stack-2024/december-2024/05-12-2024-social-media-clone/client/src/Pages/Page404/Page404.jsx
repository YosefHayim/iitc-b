import { Link } from "react-router-dom";
import img404 from "../../../public/images/404-error-page.svg";
import SubmitBtn from "../../Components/SubmitBtn/SubmitBtn";

const Page404 = () => {
  return (
    <div className="m-2">
      <img src={img404} alt="404 page" />
      <Link to="/">
        <SubmitBtn btnPlaceholder="Back to safe harbor" />
      </Link>
    </div>
  );
};

export default Page404;
