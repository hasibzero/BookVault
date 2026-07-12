export default function Searchbar({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full bg-[#f4f6f8] py-8 px-6 flex justify-center border-b border-gray-200">
      <div className="relative w-full max-w-3xl">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <input
          type="text"
          placeholder="Search for books by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#a54321] focus:border-transparent text-gray-800 shadow-sm"
        />
      </div>
    </div>
  );
}