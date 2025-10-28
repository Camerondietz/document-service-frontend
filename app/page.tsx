import Image from "next/image";

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Document OCR & Classification</h1>
      <a href="/upload" className="bg-blue-600 text-white px-4 py-2 rounded">Upload PDF</a>
    </main>
  );
}
