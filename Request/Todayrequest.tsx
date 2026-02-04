import { useState, useEffect } from "react";
import { useUmrahFilters } from "../Request/useUmrahFilters";
import ThreeDotMenu from "./ThreeDotMenu";
import { useNavigate } from "react-router-dom";
import Requesterbox from "./Requesterpopup";
import Performerpopup from "./Performerpopup";
import SearchBar from "./SearchBox"; // Adjust path as needed
import AssignPerformer from "./AssignPerformer";
const ITEMS_PER_PAGE = 10;

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

  const [selectedRequester, setSelectedRequester] = useState<any | null>(null);
  const [selectedPerformer, setSelectedPerformer] = useState<any | null>(null);
  // Add this with your other useState hooks
  const [assigningItem, setAssigningItem] = useState<any | null>(null);

  // ✅ PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);

  // reset page when filters/search change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, statusFilter, vipFilter, search]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen space-y-6 bg-[#f7f5ec] p-6">
      {/* ---------- HEADER ---------- */}
      <h1 className="text-lg font-semibold">Requests for Today</h1>

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
          </button>
        ))}
      </div>

      {/* ---------- FILTER BAR ---------- */}
      <div className="flex items-center gap-3 rounded bg-white p-4 shadow-sm">
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

        {/* ---------- SEARCH INPUT ---------- */}
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search requests..."
        />
      </div>


      {/* ---------- TABLE ---------- */}
      <div className="overflow-hidden rounded bg-white shadow-sm">
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
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-12 text-center text-gray-400">
                  No data found
                </td>
              </tr>
            ) : (
              paginatedData.map(item => (
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
                          {item.performer.type === "VIP Performer"
                            ? "👑 VIP Performer"
                            : ""}
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
                      onAssignPerformer={() => setAssigningItem(item)} // Now sets the state instead of just logging
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* ---------- PAGINATION ---------- */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="flex items-center gap-1 rounded border px-3 py-1 text-sm disabled:opacity-40"
            >
              ← Prev
            </button>

            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="flex items-center gap-1 rounded border px-3 py-1 text-sm disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        )}
      </div>

      {/* ---------- MODALS ---------- */}
      {selectedRequester && (
        <Requesterbox
          boxstate={selectedRequester}
          onClose={() => setSelectedRequester(null)}
        />
      )}

      {selectedPerformer && (
        <Performerpopup
          performarstate={selectedPerformer}
          onClose={() => setSelectedPerformer(null)}
        />
      )}
      {/* --- NEW ASSIGNMENT MODAL --- */}
      {assigningItem && (
        <AssignPerformer
          onClose={() => setAssigningItem(null)}
        />
      )}
    </div>
  );
};

export default Todayrequest;