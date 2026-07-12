export default function Sidebar({ selectedCategory, setSelectedCategory, books = [] }) {
  const uniqueCategories = ['All', ...new Set(books.map((book) => book.category))];

  const categoryIcons = {
    All: null,
    Story: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
    Tech: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    Science: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    )
  };

  const defaultIcon = (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  );

  return (
    <aside className="w-full md:w-64 bg-[#f4f7f9] p-6 rounded-xl h-fit flex-shrink-0">
      <h2 className="font-serif text-2xl font-bold text-gray-900 mb-1">Categories</h2>
      <p className="text-sm text-gray-500 mb-6">Filter by genre</p>

      <div className="flex flex-col gap-2">
        {uniqueCategories.map((categoryLabel) => {
          const isActive = selectedCategory === categoryLabel;
          const iconPath = categoryLabel === 'All' 
            ? null 
            : (categoryIcons[categoryLabel] || defaultIcon);

          return (
            <button
              key={categoryLabel}
              onClick={() => setSelectedCategory(categoryLabel)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                isActive 
                  ? 'bg-[#f8814f] text-white shadow-sm' 
                  : 'bg-transparent text-gray-700 hover:bg-gray-100'
              }`}
            >
              {iconPath && (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {iconPath}
                </svg>
              )}
              {categoryLabel === 'All' ? 'All Books' : categoryLabel}
            </button>
          );
        })}
      </div>
    </aside>
  );
}