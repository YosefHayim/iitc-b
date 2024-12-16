import { useState } from "react";
import PlaceholderImage from "/images/post-placeholder.svg";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MdZoomInMap } from "react-icons/md";
import NewPostHeader from "./NewPostHeader/NewPostHeader";
import NewPostRecentsFooter from "./NewPostRecentsFooter/NewPostRecentsFooter";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dbxaogtvv/image/upload";
const UPLOAD_PRESET = "vtyqaadj";

const NewPost = () => {
  const [icon, setIcon] = useState(<MdOutlineZoomOutMap />);
  const [postImageUrl, setImageUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleIconClick = (e) => {
    const isIconButton = e.target.closest("button")?.dataset.type === "icon";
    if (isIconButton) {
      setIcon((prev) =>
        prev.type === MdOutlineZoomOutMap ? (
          <MdZoomInMap />
        ) : (
          <MdOutlineZoomOutMap />
        ),
      );
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_UPLOAD_URL, formData);
      setImageUrl(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title || !content || !postImageUrl) {
      alert("Please add a title, content, and an image.");
      return;
    }

    const postData = {
      title,
      content,
      postImageUrl,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/posts",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      navigate(`/view-post/${response.data.postId}`);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const inputStyle =
    "rounded-[0.5em] border border-gray-700 bg-[#2c3448] mb-2 p-[0.6em] pl-[1em] pr-[1em] text-white hover:bg-profileSectionTheme";

  return (
    <div
      className="flex w-[100vw] flex-col justify-center p-[0.5em] text-white"
      onClick={handleIconClick}
    >
      <NewPostHeader />
      <form onSubmit={handleSubmit}>
        <div className="flex items-end justify-end">
          <button className="hover:txt-black mt-[0.8em] rounded-[0.5em] border border-gray-700 bg-[#2c3448] p-[0.6em] pl-[1em] pr-[1em] text-white hover:bg-profileSectionTheme">
            Create Post
          </button>
        </div>
        <div className="mt-[0.5em] flex flex-col items-center">
          <input
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={inputStyle}
          />
          <textarea
            placeholder="Enter post content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={inputStyle}
          />
          {/* Display uploaded image or placeholder */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-2"
          />
          <img
            src={postImageUrl || PlaceholderImage}
            alt="New post preview"
            className="w-[70vw]"
          />
        </div>
      </form>
      <button onClick={handleIconClick}>{icon}</button>
      <NewPostRecentsFooter />
      <FooterMenu pageValue={"Add Post"} />
    </div>
  );
};

export default NewPost;
