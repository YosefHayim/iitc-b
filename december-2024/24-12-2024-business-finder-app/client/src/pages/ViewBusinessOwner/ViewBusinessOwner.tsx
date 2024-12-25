import getUserById from "@/api/users/getUserById";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ViewBusinessOwner = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["businessOwner", id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading business owner details.</div>;

  return (
    <div className="p-4 border border-gray-300 rounded-md">
      <img src={data?.profileImg} alt="" className="rounded-[100em] h-[25vw]" />
      <h1 className="text-2xl font-bold">{data?.name}</h1>
      <p>
        <strong>Email:</strong> {data?.email}
      </p>
      <p>
        <strong>Plan:</strong> {data?.plan}
      </p>
      <p>
        <strong>Account Created:</strong>
        {new Date(data?.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default ViewBusinessOwner;
