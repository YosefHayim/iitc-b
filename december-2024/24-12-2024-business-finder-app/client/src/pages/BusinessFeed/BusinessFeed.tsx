import addBusinessPostReview from "@/api/business/addBusinessPostReview";
import deleteBusinessPostReview from "@/api/business/deleteBusinessPostReview";
import getAllBusiness from "@/api/business/getAllBusiness";
import toggleBusiness from "@/api/business/toggleBusinessPost";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { btnStyle, inputStyle } from "@/utils/stylesWarehouse";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BusinessFeed = () => {
  const userId = useSelector((state) => state.user.id);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["businessPosts"],
    queryFn: getAllBusiness,
  });

  const addCommentMutation = useMutation({
    mutationFn: addBusinessPostReview,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["businessPosts"] });
    },
  });

  const deleteCommentMutation = useMutation({
    mutationFn: deleteBusinessPostReview,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["businessPosts"] });
    },
  });

  const toggleBusinessPostMutation = useMutation({
    mutationFn: toggleBusiness,
    onSuccess: (data) => {
      console.log("Toggle Success:", data);
    },
    onError: (error) => {
      console.error("Toggle Failed:", error.message);
    },
  });

  const handleViewPost = (e: any) => {
    const businessPostId = e.target.id;
    navigate(`/view-post/${businessPostId}`);
  };

  const handleDeleteReview = (e: any) => {
    const reviewId = e.target.dataset.reviewId;
    const businessPostId = e.target.dataset.businessId;

    if (reviewId && businessPostId) {
      deleteCommentMutation.mutate({
        userId,
        businessId: businessPostId,
        reviewId,
      });
    } else {
      console.error("Missing reviewId or businessPostId");
    }
  };

  const handleViewOwner = (e: any) => {
    const ownerId = e.target.id;

    navigate(`/user/profile/${ownerId}`);
  };

  const handleReviewSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const comment = formData.get("comment");

    const businessPostId = e.target.id;

    if (comment) {
      addCommentMutation.mutate({
        userId,
        businessId: businessPostId,
        comment,
      });
    } else {
      console.error("Comment cannot be empty");
    }
  };

  const handleToggleBusiness = (e: any) => {
    const businessPostId = e.target.id;

    toggleBusinessPostMutation.mutate({ userId, businessId: businessPostId });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading business posts.</div>;

  return (
    <div>
      <div className="flex flex-col items-start justify-start w-full gap-[1.5em] mt-[5em]">
        {data?.map((businessPost: any) => (
          <div
            key={businessPost._id}
            className="p-4 border border-gray-300 rounded-md flex flex-col items-start justify-start"
          >
            <h2 className="text-xl font-bold">{businessPost.name}</h2>
            <img
              src={`${businessPost.businessImg}`}
              className="w-[28vw] rounded-[1em]"
            />
            <h4>Owned by: {businessPost.owner.name}</h4>
            <div className="grid grid-cols-2 gap-[0.5em]">
              <Button
                id={businessPost._id}
                onClick={handleViewPost}
                className={`${btnStyle}`}
              >
                View Business Profile
              </Button>
              <Button
                id={businessPost.owner._id}
                onClick={handleViewOwner}
                className={`${btnStyle}`}
              >
                View Owner Profile
              </Button>
              <Button className={`${btnStyle}`}>Share Business Post</Button>
              <Button
                id={businessPost._id}
                onClick={handleToggleBusiness}
                className={`${btnStyle}`}
              >
                Save Business Post
              </Button>
            </div>
            <div className="flex gap-[0.5em]">
              <h2>Content: </h2>
              <p className="text-gray-600">{businessPost.description}</p>
            </div>
            <div className="mb-[1em]">
              <h3 className="mt-4 text-lg font-semibold">Comments:</h3>
              {businessPost.reviews?.length > 0 ?
                businessPost.reviews.map((review: any) => (
                  <div
                    key={review._id}
                    className="flex gap-[0.5em] items-center"
                  >
                    <img
                      src={review.userId.profileImg}
                      alt=""
                      className="h-[2em] rounded-[100em]"
                    />
                    <p className="font-medium">{review.userId.name}</p>
                    <p>Comment: {review.comment}</p>
                  </div>
                ))
              : <p className="text-gray-500">No reviews yet.</p>}
            </div>
            <form
              id={businessPost._id}
              onSubmit={handleReviewSubmit}
              className="flex flex-col gap-[0.5em]"
            >
              <Input
                className={`${inputStyle}`}
                name="comment"
                id="comment"
                placeholder={`Reply to ${businessPost.owner.name}...`}
              ></Input>
              <Button type="submit">Add Comment</Button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessFeed;
