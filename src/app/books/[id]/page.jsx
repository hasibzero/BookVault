
import Image from 'next/image';
import Link from 'next/link';

const BookDetailsPage = async ({params}) => {
  const { id } = await params;
  const pageId = Number(id);
  const response = await fetch('https://book-vault-hasib.vercel.app/data.json');
  const books = await response.json();
  const book = books.find(b => b.id === pageId);
  
  return (
    <div className="min-h-screen  text-black p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Navigation */}
        <Link 
          href="/books" 
          className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Books
        </Link>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* LEFT COLUMN: Book Card */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-[#f5f6f8] text-black rounded-2xl p-6 shadow-xl flex flex-col h-full">
              
              <div className="text-center pb-4 border-b border-gray-200 mb-6">
                <span className="font-semibold text-gray-600 text-sm tracking-wide">Book Details</span>
              </div>

              {/* Book Cover Image */}
              <div className="relative w-full aspect-[2/3] max-w-[240px] mx-auto mb-8 shadow-2xl rounded-md overflow-hidden">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority
                />
              </div>

              {/* Quick Info */}
              <div className="mb-6">
                <h2 className="font-bold text-lg uppercase tracking-wide mb-1">
                  {book.title} | {book.author}
                </h2>
                
                {/* Stars */}
                <div className="flex items-center text-xs mb-3 text-gray-500">
                  <div className="flex text-black mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  (4.8/5)
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  Set against the rugged coast of Cornwall, '{book.title}' is a poignant exploration of memory, loss, and the enduring power of connection. A modern classic for our time.
                </p>
              </div>

              
            </div>
          </div>

          {/* RIGHT COLUMN: Book Information */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              {/* {book.tags.map((tag) => (
                <span key={tag} className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                  {tag}
                </span>
              ))} */}
            </div>

            {/* Title & Author */}
            <h1 className="text-4xl md:text-5xl font-serif text-[#1e2a4a] font-bold mb-3">
              {/* {book.title} */}
            </h1>
            <p className="text-lg text-gray-400 mb-10">
              {/* By <span className="text-[#3a5b9b] font-medium cursor-pointer hover:underline">{book.author}</span> */}
            </p>

            <hr className="border-gray-800 mb-8" />

            {/* Synopsis */}
            <div className="mb-10">
              <h3 className="text-[#1e2a4a] text-xl font-serif font-bold mb-4">Synopsis</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl">
                {/* {book.synopsis} */}
              </p>
            </div>

            {/* Status & Action Box */}
            <div className="bg-white rounded-xl p-5 md:p-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block mb-1">Status</span>
                <div className="flex items-center text-black font-semibold text-lg">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {/* Available Quantity: {book.availableQuantity} copies left */}
                </div>
              </div>
              <button className="w-full sm:w-auto bg-[#c85a2f] hover:bg-[#b04a23] text-white px-6 py-3 rounded-md font-bold transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Borrow This Book
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              
              <div className="bg-[#f5f6f8] rounded-xl p-4 flex flex-col items-center justify-center text-center text-black">
                <svg className="w-6 h-6 text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-xs text-gray-500 mb-1">Pages</span>
                {/* <span className="font-bold">{book.pages}</span> */}
              </div>

              <div className="bg-[#f5f6f8] rounded-xl p-4 flex flex-col items-center justify-center text-center text-black">
                <svg className="w-6 h-6 text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs text-gray-500 mb-1">Published</span>
                {/* <span className="font-bold">{book.published}</span> */}
              </div>

              <div className="bg-[#f5f6f8] rounded-xl p-4 flex flex-col items-center justify-center text-center text-black">
                <svg className="w-6 h-6 text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="text-xs text-gray-500 mb-1">Language</span>
                {/* <span className="font-bold">{book.language}</span> */}
              </div>

              <div className="bg-[#f5f6f8] rounded-xl p-4 flex flex-col items-center justify-center text-center text-black">
                <svg className="w-6 h-6 text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="text-xs text-gray-500 mb-1">Rating</span>
                {/* <span className="font-bold">{book.rating}</span> */}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookDetailsPage