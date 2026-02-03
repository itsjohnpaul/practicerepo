import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import umrahData from "../data/umrahData";

/* ---------- Reusable Dropdown ---------- */
const DropdownSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(true); // Default open to match image

  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-[#f8f9fc] border border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2 px-6 py-4 text-left font-bold text-[#4c5a81]"
      >
        <span className={`text-blue-600 transition-transform ${!open ? "-rotate-90" : ""}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6" /></svg>
        </span>
        {title}
      </button>

      {open && (
        <div className="mx-2 mb-2 space-y-0 rounded-lg bg-white px-6 py-2 shadow-sm">
          {children}
        </div>
      )}
    </div>
  );
};

/* ---------- Row Component for Consistency ---------- */
const InfoRow = ({ label, value, isVip = false }: { label: string; value: any; isVip?: any }) => (
  <div className="flex border-b border-gray-50 py-3 last:border-0">
    <span className="w-1/3 text-sm text-gray-400">{label}</span>
    <span className="flex w-2/3 items-center gap-2 text-sm font-medium text-gray-700">
      {value || "-"}
      {isVip && (
        <span className="flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5 text-[10px] text-blue-600">
          💎 VIP User
        </span>
      )}
    </span>
  </div>
);

/* ---------- Main Component ---------- */
const UmrahView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Basic Details");

  const data = umrahData.find((item) => item.requestId === id);

  if (!data) {
    return <div className="p-4">No data found</div>;
  }

  return (
    <div className="min-h-screen bg-[#fcfaf7] p-6">
      {/* Header */}
      <div className="mx-auto max-w-5xl ">
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border bg-white shadow-sm hover:bg-gray-50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <h2 className="text-2xl font-bold text-gray-800">View Details</h2>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${data.statusClass || "bg-gray-50 text-gray-500 border border-gray-200"
              }`}
          >
            {data.status}
          </span>

        </div>

        {/* Tabs - matching the UI line */}
      {/* Tabs */}
<div className="mb-6 flex border-b bg-white border-gray-200">
  {["Basic Details", "Live Tracking", "Umrah Stages"].map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`relative px-6 py-3 text-sm font-semibold transition-colors ${
        activeTab === tab ? "text-blue-600" : "text-gray-400"
      }`}
    >
      {tab}
      {activeTab === tab && (
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600" />
      )}
    </button>
  ))}
</div>

{/* Content Area - Now Full Width with Padding */}
<div className="w-full bg-white p-6 rounded-lg shadow-sm border border-gray-100">
  {/* Request Details Section */}
  <DropdownSection title="Request Detail">
    <InfoRow label="Request Id" value={data.requestId} />
    <InfoRow label="Umrah to be performed on" value={data.umrahFor.umrahperformedon} />
    <InfoRow label="Umrah for" value={data.umrahFor.name} isVip={true} />
    <InfoRow label="Gender" value={data.umrahFor.type} />
    <InfoRow label="Living Status" value={data.livingStatus} />
    <InfoRow label="Special Notes" value="Special thanks to almighty on my promotion" />
    <InfoRow label="Booked Date" value={data.livingStatus} />
    <InfoRow label="Payment Transaction Id" value={data.livingStatus} />
    <InfoRow label="Amount paid" value={data.livingStatus} />
  </DropdownSection>

  {/* Performer Details Section */}
  <div className="mt-4">
    <DropdownSection title="Performer Details">
      {(() => {
        switch (data.status) {
          case "Performer Requested":
          case "Performer Accepted":
          case "Umrah In Progress":
          case "Umrah Completed":
            return (
              <>
                <InfoRow
                  label="Performer Name"
                  value={data.performer?.name}
                  isVip={false}
                />
                <InfoRow label="Assigned By" value={data.performer?.performerDetail?.assignedby} />
                <InfoRow label="Assigned Date" value={data.performer?.performerDetail?.assignedDate} />
              </>
            );
          case "Performer Not Assigned":
            return ( <>
                <InfoRow
                  label="Performer Name"
                  value={data.performer?.name}
                  isVip={false}
                />
                <InfoRow label="Assigned By" value={data.performer?.performerDetail?.assignedby} />
                <InfoRow label="Assigned Date" value={data.performer?.performerDetail?.assignedDate} />
              </>);
          default:
            return <p className="py-4 text-sm text-gray-500">No performer details available.</p>;
        }
      })()}
    </DropdownSection>
    {data.status === "Umrah Completed" && (
          <DropdownSection title="Requester Feedback">
            <InfoRow label="Ratings" value={""}/>
 <InfoRow label="Comments" value={data.umrahFor.specialnotes}/>

          </DropdownSection>
        )}
  </div>
</div> 
      </div>
    </div>
  );
};

export default UmrahView;
