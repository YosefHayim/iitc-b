import addBusinessPostReview from "@/api/business/addBusinessPostReview";
import deleteBusinessPostReview from "@/api/business/deleteBusinessPostReview";
import getAllBusiness from "@/api/business/getAllBusiness";
import toggleBusiness from "@/api/business/toggleBusinessPost";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
    const userId = "676bb51cf578bc1fd14f4620";

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
    const userId = "676b1bca7c698fd6fc3f0d2a";

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
    const userId = "676b1bca7c698fd6fc3f0d2a";

    toggleBusinessPostMutation.mutate({ userId, businessId: businessPostId });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading business posts.</div>;

  return (
    <div>
      <h1 className="w-full text-center">Home</h1>
      <div className="flex flex-col items-start justify-start w-full gap-[1.5em]">
        {data?.map(
          (businessPost: any) => (
            console.log(businessPost),
            (
              <div
                key={businessPost._id}
                className="p-4 border border-gray-300 rounded-md"
              >
                <h2 className="text-xl font-bold">{businessPost.name}</h2>
                <img src={businessPost.businessImg} />
                <h4>business owner: {businessPost.owner.name}</h4>
                <p className="text-gray-600">{businessPost.description}</p>
                <h3 className="mt-4 text-lg font-semibold">Reviews:</h3>
                <div className="pl-4">
                  {businessPost.reviews?.length > 0 ? (
                    businessPost.reviews.map((review: any) => (
                      <div key={review._id} className="mb-2">
                        <p className="font-medium">
                          User: {review.userId.name}
                        </p>
                        <p>Comment: {review.comment}</p>
                        <Button
                          data-review-id={review._id}
                          data-business-id={businessPost._id}
                          onClick={handleDeleteReview}
                        >
                          delete comment
                        </Button>
                        <Button id={review._id}>edit comment</Button>
                        <form
                          id={businessPost._id}
                          onSubmit={handleReviewSubmit}
                        >
                          <Input
                            name="comment"
                            id="comment"
                            placeholder={`Add comment to ${businessPost.owner.name}...`}
                          ></Input>
                          <Button type="submit">add comment</Button>
                        </form>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No reviews yet.</p>
                  )}
                </div>
                <Button id={businessPost._id} onClick={handleViewPost}>
                  View business profile page
                </Button>
                <Button id={businessPost.owner._id} onClick={handleViewOwner}>
                  View user owner profile
                </Button>
                <Button>share business post</Button>
                <Button id={businessPost._id} onClick={handleToggleBusiness}>
                  save business post
                </Button>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Home;
