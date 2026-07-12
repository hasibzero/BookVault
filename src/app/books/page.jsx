
import LibraryLayout from "@/components/books/LibraryLayout";

export default async function BooksPage() {
  const response = await fetch('https://book-vault-hasib.vercel.app/data.json');
  const books = await response.json();

  return (
    <div className="min-h-screen flex flex-col ">
      <LibraryLayout initialBooks={books} />
    </div>
  );
}