type Props = {
  onView: () => void;
  onAssignPerformer: () => void;
};

const ThreeDotMenu = ({ onView, onAssignPerformer }: Props) => {
  return (
    <div className="relative group inline-block">
      {/* Trigger Button */}
      <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 bg-white transition-colors">
        <span className="mb-2 font-bold text-gray-600">...</span>
      </button>

      {/* Dropdown Menu */}
      {/* z-50: Ensures the menu sits on top of all other elements.
          top-full: Positions it directly below the button.
          shadow-xl: Adds a deep shadow to help it stand out from the background.
      */}
      <div className="absolute right-0 top-full mt-1 hidden group-hover:block bg-white border border-gray-200 rounded shadow-xl w-44 z-50 overflow-hidden">
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevents row click events
            onView();
          }}
          className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-50"
        >
          View
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevents row click events
            onAssignPerformer();
          }}
          className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
        >
          Assign Performer
        </button>
      </div>
    </div>
  );
};

export default ThreeDotMenu;
