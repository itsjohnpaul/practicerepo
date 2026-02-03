import { useState } from "react";
import { useUmrahFilters } from "../Request/useUmrahFilters";
import ThreeDotMenu from "./ThreeDotMenu";
import { useNavigate } from "react-router-dom";
import Requesterbox from "./Requesterpopup";
import Performerpopup from "./Performerpopup";
const Todayrequest = () => {
  const {
    activeTab,
    statusFilter,
    vipFilter,
    search,
    setStatusFilter,
    setVipFilter,
    setSearch,
    filteredData,
    resetFilters,
    tabs,
  } = useUmrahFilters();

  const navigate = useNavigate();

  // ✅ selected row states
  const [selectedRequester, setSelectedRequester] = useState<any | null>(null);
  const [selectedPerformer, setSelectedPerformer] = useState<any | null>(null);

  return (
    <div className="min-h-screen space-y-6 bg-[#f7f5ec] p-6">
      {/* ---------- HEADER ---------- */}
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold">Requests for Today</h1>
      </div>

      {/* ---------- TABS ---------- */}
      <div className="flex gap-6 border-b bg-white px-4">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => resetFilters(tab)}
            className={`relative pb-3 text-sm ${activeTab === tab
              ? "text-blue-600 font-medium border-b-2 border-blue-600"
              : "text-gray-500"
              }`}
          >
            {tab}
            <span className="ml-2 rounded-full bg-gray-100 px-2 text-xs">
              {tab === "All"
                ? filteredData.length
                : filteredData.filter(i => i.status === tab).length}
            </span>
            <span> | </span>
          </button>
        ))}
      </div>

      {/* ---------- FILTER BAR ---------- */}
      <div className="flex items-center gap-3 rounded bg-white p-4 shadow-sm ">
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value as any)}
          className="rounded border px-3 py-2 text-sm"
        >
          <option value="All">All Status</option>
          {tabs.filter(t => t !== "All").map(t => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <div className="flex rounded border border-gray-500">
          {["All", "VIP", "Non-VIP"].map(type => (
            <button
              key={type}
              onClick={() => setVipFilter(type as any)}
              className={`px-4 py-2 text-sm ${vipFilter === type
                ? "bg-blue-100 text-blue-600 border border-blue-900"
                : "text-gray-500"
                }`}
            >
              {type === "All" ? "All" : `${type} User`}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="ml-auto w-64 rounded border px-3 py-2 text-sm"
        />
      </div>

      {/* ---------- TABLE ---------- */}
      <div className="overflow-hidden rounded bg-white shadow-sm min-h-screen">
        <table className="min-w-full text-sm">
          <thead className="bg-[#f1eddd] text-left">
            <tr>
              <th className="px-4 py-3">Request Id</th>
              <th className="px-4 py-3">Umrah For</th>
              <th className="px-4 py-3">Living Status</th>
              <th className="px-4 py-3">Gender</th>
              <th className="px-4 py-3">Performer</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredData.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="py-12 text-center text-gray-400"
                >
                  No data found
                </td>
              </tr>
            ) : (
              filteredData.map(item => (
                <tr key={item.requestId} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{item.requestId}</td>

                  <td className="px-4 py-3">
                    <p
                      onClick={() => setSelectedRequester(item)}
                      className="cursor-pointer font-medium underline"
                    >
                      {item.umrahFor.name}
                    </p>

                    <span className="text-xs text-blue-600">
                      {item.umrahFor.type === "VIP User" ? "💎 VIP User" : ""}
                    </span>
                  </td>

                  <td className="px-4 py-3">{item.livingStatus}</td>
                  <td className="px-4 py-3">{item.gender}</td>

                  <td className="px-4 py-3">
                    {item.performer ? (
                      <>
                        <p
                          onClick={() => setSelectedPerformer(item)}
                          className="cursor-pointer font-medium"
                        >
                          {item.performer.name}
                        </p>
                        <span className="text-xs text-orange-600">
                          {item.performer.type === "VIP Performer" ? "👑 VIP Performer" : ""}
                        </span>
                      </>
                    ) : (
                      "-"
                    )}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${item.statusClass}`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="px-4 py-3">
                    <ThreeDotMenu
                      onView={() => navigate(`/umrah/${item.requestId}`)}
                      onAssignPerformer={() =>
                        console.log("Assign performer", item.requestId)
                      }
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

      {/* ---------- REQUESTER MODAL ---------- */}
      {selectedRequester && (
        <Requesterbox
          boxstate={selectedRequester}
          onClose={() => setSelectedRequester(null)}
        />
      )}

      {/* ---------- PERFORMER MODAL ---------- */}
      {selectedPerformer && (
        <Performerpopup performarstate={selectedPerformer}
          onClose={() => setSelectedPerformer(null)} />
      )}
    </div>
  );
};

export default Todayrequest;
