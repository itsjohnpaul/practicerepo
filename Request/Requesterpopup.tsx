type RequesterboxProps = {
  boxstate: any;          // selected row data
  onClose: () => void;    // close modal
};

const Requesterbox = ({ boxstate, onClose }: RequesterboxProps) => {
  if (!boxstate) return null;

  const requester = boxstate.umrahFor;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      
      {/* Modal Card */}
      <div className="w-full max-w-xl  bg-white rounded-xl shadow-2xl border-2 border-blue-400 flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">
            Requester Details
          </h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-400 hover:text-gray-600 transition"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="divide-y divide-gray-100 text-sm">
            
            {/* Special Row for 'Umrah For' with Badge */}
            <div className="flex py-3">
              <span className="w-1/3 text-gray-500 font-medium">
                Umrah For
              </span>
              <div className="w-2/3">
                <p className="font-semibold text-gray-800">
                  {requester.name}
                </p>
                {requester.type==="VIP User" && (
                  <span className="mt-1 inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-600 border border-blue-100 uppercase">
                    💎 {requester.type}
                  </span>
                )}
              </div>
            </div>

            {/* Standard Rows */}
            <DataRow label="Request ID" value={boxstate.requestId} />
            <DataRow label="Requested By" value={requester.requestedby} />
            <DataRow label="Email ID" value={requester.emailid} />
            <DataRow label="Mobile Number" value={requester.mobile} />
            <DataRow label="Nationality" value={requester.nationality} />

          </div>
        </div>

        {/* Footer */}
       

      </div>
    </div>
  );
};

/* ---------- Reusable Data Row Component ---------- */
const DataRow = ({ label, value }: { label: string; value: string | number }) => (
  <div className="flex py-3 items-center">
    <span className="w-1/3 text-gray-500 font-medium">{label}</span>
    <span className="w-2/3 text-gray-800 font-semibold">{value || "N/A"}</span>
  </div>
);

export default Requesterbox;
