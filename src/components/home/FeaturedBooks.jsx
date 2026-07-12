"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Import the new component (adjust the path depending on your folder structure)
import ProductCard from '@/components/books/ProductCard';
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

export default function FeaturedBooks() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://book-vault-hasib.vercel.app/data.json');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section className="w-full py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e1f2e] mb-2">
              Featured Collection
            </h2>
            <p className="text-gray-500 text-sm">
              Handpicked titles to start your journey.
            </p>
          </div>
          
          <Link 
            href="/collection" 
            className="text-[#a84724] hover:text-[#d35a2d] text-sm font-semibold transition-colors flex items-center gap-1"
          >
            View All 
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="h-[450px] w-full flex items-center justify-center">
             <span className="text-gray-500">Loading collection...</span>
          </div>
        ) : (
          <div className="relative">
            <Swiper
              modules={[Navigation, FreeMode]}
              spaceBetween={24}
              slidesPerView={1.2}
              freeMode={true}
              navigation={true}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 4, freeMode: false },
              }}
              className="w-full pb-4"
            >
              {books.map((book) => (
                <SwiperSlide key={book.id} className="h-auto">
                  <ProductCard book={book} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

      </div>
    </section>
  );
}