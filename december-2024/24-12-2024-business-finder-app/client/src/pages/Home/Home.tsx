import addBusinessPostReview from "@/api/business/addBusinessPostReview";
import deleteBusinessPostReview from "@/api/business/deleteBusinessPostReview";
import getAllBusiness from "@/api/business/getAllBusiness";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Home = () => {
  const queryClient = useQueryClient();

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

  const handleDeleteReview = (e: any) => {
    const reviewId = e.target.dataset.reviewId;
    const businessPostId = e.target.dataset.businessId;
    const userId = "676ad913ba064dcdbecf8996";

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

  const handleReviewSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const comment = formData.get("comment");

    const businessPostId = e.target.id;
    const userId = "676ad913ba064dcdbecf8996";

    if (comment) {
      addBusinessPostReview.mutate({
        userId,
        businessId: businessPostId,
        comment,
      });
    } else {
      console.error("Comment cannot be empty");
    }
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
            <h4>business owner: {businessPost.owner.name}</h4>
            <p className="text-gray-600">{businessPost.description}</p>
            <h3 className="mt-4 text-lg font-semibold">Reviews:</h3>
            <div className="pl-4">
              {businessPost.reviews?.length > 0 ? (
                businessPost.reviews.map((review: any) => (
                  <div key={review._id} className="mb-2">
                    <p className="font-medium">User: {review.userId.name}</p>
                    <p>Comment: {review.comment}</p>
                    <Button
                      data-review-id={review._id}
                      data-business-id={businessPost._id}
                      onClick={handleDeleteReview}
                    >
                      delete comment
                    </Button>
                    <Button id={review._id}>edit comment</Button>
                    <form id={businessPost._id} onSubmit={handleReviewSubmit}>
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
            <Button>View business profile page</Button>
            <Button>View user owner profile</Button>
            <Button>share business post</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
