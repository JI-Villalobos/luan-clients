export default function AddConsideration() {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-10">
      <div className="flex flex-row w-3/5 h-20 shadow-md justify-center items-center">
        <input
          type="text"
          name="consideration"
          id="consideration"
          className="m-1 text-center text-indigo-600 block w-4/5 h-10 rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save
        </button>
      </div>
    </div>
  )
}