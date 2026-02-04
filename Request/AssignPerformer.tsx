import { useUmrahFilters } from './useUmrahFilters';
import SearchBar from './SearchBox';

interface AssignPerformerProps {
  onClose: () => void;
}

function AssignPerformer({ onClose }: AssignPerformerProps) {
  // 1. Initialize the hook locally for this component
  // This gives you a fresh 'search' state and your exact filter logic
  const { search,setSearch, filteredData } = useUmrahFilters();

  // 2. Filter the hook's result to only show rows with performers
  const performersOnly = filteredData.filter(
    item => item.performer !== null && item.performer !== undefined
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <h1 className="text-xl font-bold">Eligible Performer for Assignment</h1>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Using hook's setSearch and search */}
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search performer..."
            />
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-black text-3xl leading-none px-2"
            >
              &times;
            </button>
          </div>
        </div>

        <div className="overflow-auto border rounded-md">
          <table className="w-full text-left">
            <thead className="bg-[#f1eddd] sticky top-0">
              <tr className="border-b">
                <th className="py-3 px-4 text-sm font-semibold">Performer Id</th>
                <th className="py-3 px-4 text-sm font-semibold">Name</th>
                <th className="py-3 px-4 text-sm font-semibold">Rating</th>
                <th className="py-3 px-4 text-sm font-semibold">Umrah Performed</th>
                <th className="py-3 px-4 text-sm font-semibold">Mobile Number</th>
                <th className="py-3 px-4 text-sm font-semibold">Gender</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {performersOnly.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-gray-500">
                    No performers available matching your search.
                  </td>
                </tr>
              ) : (
                performersOnly.map((item) => (
                  <tr key={item.requestId} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-sm font-mono">{item.requestId}</td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">{item.performer?.name}</td>
                    <td className="py-3 px-4 text-sm text-orange-500">⭐ 4.5</td>
                    <td className="py-3 px-4 text-sm">
                      {item.performer?.performerDetail?.umrahPerformedNo || 0}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {item.performer?.performerDetail?.mobile}
                    </td>
                    <td className="py-3 px-4 text-sm capitalize">
                      {item.performer?.performerDetail?.gender}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AssignPerformer;