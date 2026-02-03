type PerformerpopupProps = {
  performarstate: any;
  onClose: () => void;
};

const PerformerPopup = ({ performarstate, onClose,}: PerformerpopupProps) => {
  if (!performarstate) return null;

  const requester = performarstate.umrahFor;
  const performer = performarstate.performer;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      {/* Popup Card */}
      <div className="w-full max-w-xl max-h-[30hv] bg-white rounded-xl shadow-2xl border-2 border-blue-400 flex flex-col">

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

        {/* Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="divide-y divide-gray-100 text-sm">

            {/* Umrah For */}
            <div className="flex py-3">
              <span className="w-1/3 text-gray-500 font-medium">
                Umrah For
              </span>
              <div className="w-2/3">
                <p className="font-semibold text-gray-800">
                  {requester.name}
                </p>
                {requester.type && (
                  <span className="mt-1 inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-600 border border-blue-100 uppercase">
                    💎 {requester.type}
                  </span>
                )}
              </div>
            </div>

            <DataRow label="Request ID" value={performarstate.requestId} />
            <DataRow label="Requested By" value={requester.requestedby} />
            <DataRow label="Email ID" value={requester.emailid} />
            <DataRow label="Mobile Number" value={`+${requester.mobile}`} />
            <DataRow label="Nationality" value={requester.nationality} />

            {/* Performer Section */}
            <div className="flex py-3 bg-gray-50 -mx-6 px-6">
              <span className="w-1/3 text-gray-500 font-medium">
                Assigned Performer
              </span>

              <div className="w-2/3">
                {performer ? (
                  <>
                    <p className="font-semibold text-gray-800">
                      {performer.name}
                    </p>
                    <p className="text-xs font-bold text-blue-500 uppercase tracking-wide">
                      {performer.type}
                    </p>
                  </>
                ) : (
                  <span className="text-sm font-semibold text-red-500">
                    Not Assigned
                  </span>
                )}
              </div>
            </div>

            {performer?.performerDetail && (
              <>
                <DataRow
                  label="Performer Email"
                  value={performer.performerDetail.email}
                />
                <DataRow
                  label="Assigned Date"
                  value={performer.performerDetail.assignedDate}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Reusable Row ---------- */
const DataRow = ({ label,value,}: {label: string; value: string | number;}) => (
  <div className="flex py-2 items-center">
    <span className="w-1/3 text-gray-500 font-medium">{label}</span>
    <span className="w-2/3 text-gray-800 font-medium">{value}</span>
  </div>
);

export default PerformerPopup;
