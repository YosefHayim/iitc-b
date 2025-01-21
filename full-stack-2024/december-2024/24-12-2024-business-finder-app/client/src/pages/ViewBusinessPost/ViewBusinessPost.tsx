import getBusinessById from "@/api/business/getBusinessById";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ViewBusinessPost = () => {
  const { id: businessPostId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["businessPost", businessPostId],
    queryFn: () => getBusinessById(businessPostId),
    enabled: !!businessPostId,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading business post.</div>;

  return (
    <div className="p-4 border border-gray-300 rounded-md">
      <h1 className="text-2xl font-bold">{data?.name}</h1>
      <img src={data.businessImg} alt="" />
      <p className="text-gray-600 mb-4">{data?.description}</p>
      <p>
        <strong>Category:</strong> {data?.category}
      </p>
      <p>
        <strong>Owner:</strong> {data?.owner?.name}
      </p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Reviews:</h3>
        {data?.reviews?.length > 0 ? (
          <ul className="list-disc pl-6">
            {data.reviews.map((review: any) => (
              <li key={review._id}>
                <p>
                  <strong>User:</strong> {review.userId.name}
                </p>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            No reviews available for this business.
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewBusinessPost;
