type Props = {
  onView: () => void;
  onAssignPerformer: () => void;
};

const ThreeDotMenu = ({ onView, onAssignPerformer }: Props) => {
  return (
    <div className="relative group inline-block">
  <button className="flex items-center justify-center w-8 h-8 border rounded hover:bg-gray-100">
    ...
  </button>
      <div className="absolute right-0 hidden group-hover:block bg-gray-50 border rounded shadow w-40">
        <button
          onClick={onView}
          className="w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          View
        </button>

        <button
          onClick={onAssignPerformer}
          className="w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          Assign Performer
        </button>
      </div>
    </div>
  );
};

export default ThreeDotMenu;
