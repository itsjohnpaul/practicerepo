import img from "../assets/livetrack.png";

const LiveTrackingTab = () => (
  <div className="space-y-4">
    {/* Live Tracking Header Actions */}
    <div className="flex items-center justify-between pb-2">
      <div className="flex items-center gap-2 text-[#334155] font-semibold">
        <span className="text-blue-600">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
          </svg>
        </span>
        Live Tracking
      </div>
      
      <div className="flex items-center gap-4">
        <span className="text-[10px] text-green-600 flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          Last live location Updated 13:05 PM
        </span>
        <button className="flex items-center gap-2 px-3 py-1.5 border rounded-md text-sm text-gray-600 hover:bg-gray-50 shadow-sm transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
          Refresh
        </button>
      </div>
    </div>

    {/* Map Container */}
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-inner group">
      {/* Background Image (The Location Map) */}
      <img 
        src={img}// Replace with your image source
        alt="Live Tracking Map" 
        className="w-full h-full object-cover"
      />

      {/* Performer Marker Overlay */}
    

      {/* Map Controls (Zoom / Fullscreen) */}
    <div className="absolute bottom-4 right-4 flex flex-col items-end gap-2">
  {/* Zoom Controls */}
  <div className="flex items-center bg-white border rounded-lg shadow-md font-bold text-gray-700">
    <button className="p-2 hover:bg-gray-100 transition-colors">—</button>
    <span className="px-2 text-xs border-x h-full flex items-center">100%</span>
    <button className="p-2 hover:bg-gray-100 transition-colors">+</button>
  </div>

  {/* Expand Button */}
  <button className="p-2 bg-white border rounded-lg shadow-md hover:bg-gray-100 text-gray-600 transition-colors">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
    </svg>
  </button>
</div>
    </div>
  </div>
);

export default LiveTrackingTab;