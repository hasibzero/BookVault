"use client";

import { useState } from 'react';
import Sidebar from './Sidebar';
import Searchbar from './Searchbar';
import ProductCard from './ProductCard';

export default function LibraryLayout({ initialBooks }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBooks = initialBooks.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Top Search Bar */}
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto p-6 md:p-10 flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar */}
        <Sidebar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
          books={initialBooks} 
        />

        {/* Right Books Grid */}
        <div className="flex-1">
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <ProductCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-gray-400 h-64 flex flex-col items-center justify-center border border-gray-800 rounded-xl bg-gray-900/50">
              <p className="text-lg mb-2">No books found.</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="text-[#a54321] hover:underline text-sm"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
        
      </main>
    </>
  );
}