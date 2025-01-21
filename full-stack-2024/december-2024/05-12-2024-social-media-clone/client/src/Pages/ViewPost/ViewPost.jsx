import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../../Components/Post/Post";
import BackPageArrow from "../../Components/BackPageArrow/BackPageArrow";
import Loader from "../../Components/Loader/Loader";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import MenuContainer from "../../Components/Menubar/Menubar";

const ViewPost = () => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const postId = params.postId.replace(/:/g, "");

  const fetchPost = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/posts/${postId}`,
        {
          withCredentials: true,
        },
      );

      if (data) {
        setPost(data);
      }
    } catch (error) {
      console.error(`Error has been occurred durning API post: `, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  return (
    <div className="mt-[3.5em] text-white">
      <MenuContainer />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <BackPageArrow />
          <Post post={post} />
        </div>
      )}
      <FooterMenu />
    </div>
  );
};

export default ViewPost;
