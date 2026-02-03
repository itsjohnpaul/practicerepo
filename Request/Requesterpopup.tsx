type RequesterboxProps = {
  boxstate: any;          // selected row data
  onClose: () => void;    // close modal
};

const Requesterbox = ({ boxstate, onClose }: RequesterboxProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      
      {/* Modal */}
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Requester Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="space-y-2 text-sm text-gray-700">
          <p><b>Name:</b> {boxstate.umrahFor.name}</p>
          <p><b>Gender:</b> {boxstate.gender}</p>
          <p><b>Living Status:</b> {boxstate.livingStatus}</p>
          <p><b>Status:</b> {boxstate.status}</p>
          <p><b>Request ID:</b> {boxstate.requestId}</p>
        </div>

        {/* Footer */}
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default Requesterbox;
