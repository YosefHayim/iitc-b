import getAllBusiness from "@/api/business/getAllBusiness";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Home = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["businessPosts"],
    queryFn: getAllBusiness,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading business posts.</div>;

  return (
    <div>
      <h1 className="w-full text-center">Home</h1>
      <div className="flex flex-col items-start justify-start w-full gap-[1.5em]">
        {data?.map((businessPost: any) => (
          <div key={businessPost._id} className="p-4 border border-gray-300 rounded-md">
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
                    <form id={businessPost._id}>
                      <Input placeholder={`Add comment to ${businessPost.owner.name}...`}></Input>
                      <Button>add comment</Button>
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
