import Image from 'next/image';

export default function ProductCard({ book }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden flex flex-col h-[450px] shadow-lg">
      
      {/* Image Container with Badge */}
      <div className="relative w-full h-[260px] bg-gray-100 flex-shrink-0">
        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10 bg-white px-2.5 py-1 text-xs font-semibold text-gray-800 rounded shadow-sm">
          {book.category}
        </div>
        
        <Image
          src={book.image_url}
          alt={`Cover of ${book.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-1 leading-tight line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          {book.author}
        </p>
        
        {/* Button pinned to bottom */}
        <button className="mt-auto w-full py-2.5 border border-gray-900 rounded-md text-sm font-bold text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200">
          View Details
        </button>
      </div>
      
    </div>
  );
}