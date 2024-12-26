import addBusinessPostReview from "@/api/business/addBusinessPostReview";
import deleteBusinessPostReview from "@/api/business/deleteBusinessPostReview";
import getAllBusiness from "@/api/business/getAllBusiness";
import toggleBusiness from "@/api/business/toggleBusinessPost";
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
      <h1 className="w-full text-center">Home</h1>
      <div className="flex flex-col items-start justify-start w-full gap-[1.5em]">
        {data?.map((businessPost: any) => (
          <div
            key={businessPost._id}
            className="p-4 border border-gray-300 rounded-md"
          >
            <h2 className="text-xl font-bold">{businessPost.name}</h2>
            <img src={`${businessPost.businessImg}`} />
            <h4>business owner: {businessPost.owner.name}</h4>
            <button id={businessPost._id} onClick={handleViewPost}>
              View business profile page
            </button>
            <button id={businessPost.owner._id} onClick={handleViewOwner}>
              View user owner profile
            </button>
            <button>share business post</button>
            <button id={businessPost._id} onClick={handleToggleBusiness}>
              save business post
            </button>
            <p className="text-gray-600">{businessPost.description}</p>
            <h3 className="mt-4 text-lg font-semibold">Reviews:</h3>
            <div className="pl-4">
              {businessPost.reviews?.length > 0 ?
                businessPost.reviews.map((review: any) => (
                  <div key={review._id} className="mb-2">
                    <p className="font-medium">User: {review.userId.name}</p>
                    <p>Comment: {review.comment}</p>
                    <button
                      data-review-id={review._id}
                      data-business-id={businessPost._id}
                      onClick={handleDeleteReview}
                    >
                      delete comment
                    </button>
                    <button id={review._id}>edit comment</button>
                    <form id={businessPost._id} onSubmit={handleReviewSubmit}>
                      <input
                        name="comment"
                        id="comment"
                        placeholder={`Add comment to ${businessPost.owner.name}...`}
                      ></input>
                      <button type="submit">add comment</button>
                    </form>
                  </div>
                ))
              : <p className="text-gray-500">No reviews yet.</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessFeed;
