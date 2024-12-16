import axios from "axios";
import { useEffect, useState } from "react";
import MenuContainer from "../../Components/Menubar/Menubar.jsx";
import Post from "../../Components/Post/Post.jsx";
import FooterMenu from "../../Components/FooterMenu/FooterMenu.jsx";
import Loader from "../../Components/Loader/Loader.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import memoryLikesFn from "../../utils/memoryLikesFn.js";
import likeUnlikePost from "../../Api/likeUnlikePost.js";

const PostsFeed = () => {
  const [postsData, setPostsData] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/posts?limit=${limit}`,
        { withCredentials: true },
      );
      if (response.data.length === 0) {
        setHasMore(false);
      }
      setPostsData((prevPosts) => [...prevPosts, ...response.data]);
    } catch (error) {
      console.error(`Error during fetching API:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [limit]);

  const fetchMoreData = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  return (
    <div className="m-8 mt-[4em] flex flex-col items-center justify-center text-white">
      <MenuContainer />
      <InfiniteScroll
        dataLength={postsData.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={
          <h1 style={{ textAlign: "center" }}>
            <b>No more posts to view at this moment.</b>
          </h1>
        }
      >
        {postsData.map((post, index) => (
          <Post key={index} className={post._id} post={post} />
        ))}
      </InfiniteScroll>
      <FooterMenu pageValue={"Home"} />
    </div>
  );
};

export default PostsFeed;
