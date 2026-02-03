type PerformerpopupProps = {
  performarstate: any;
  onClose: () => void;
};

function Performerpopup({
  performarstate,
  onClose,
}: PerformerpopupProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">

        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Performer Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="space-y-2 text-sm">
          <p><b>Name:</b> {performarstate.performer.name}</p>
          <p><b>Type:</b> {performarstate.performer.type}</p>
          <p><b>Status:</b> {performarstate.status}</p>
        </div>

      </div>
    </div>
  );
}

export default Performerpopup;
