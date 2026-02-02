import { useParams, useNavigate } from "react-router-dom";
import umrahData from "../Request/umrahData";

const UmrahView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = umrahData.find((item) => item.requestId === id);

  if (!data) {
    return <div className="p-4">No data found</div>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-500"
      >
        ← Back
      </button>

      <h2 className="text-xl font-bold mb-4">
        Umrah Request Details
      </h2>

      <p><b>Request ID:</b> {data.requestId}</p>
      <p><b>Name:</b> {data.umrahFor.name}</p>
      <p><b>User Type:</b> {data.umrahFor.type}</p>
      <p><b>Status:</b> {data.status}</p>
      <p><b>Gender:</b> {data.gender}</p>
      <p><b>Living Status:</b> {data.livingStatus}</p>

      <hr className="my-3" />

      {data.performer ? (
        <>
          <h3 className="font-semibold">Performer Details</h3>
          <p>{data.performer.name}</p>
          <p>{data.performer.type}</p>
        </>
      ) : (
        <p className="text-red-500">No Performer Assigned</p>
      )}
    </div>
  );
};

export default UmrahView;
