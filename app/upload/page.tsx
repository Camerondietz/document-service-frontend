'use client';
import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ocr/upload`, {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Upload a PDF</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <button type="submit" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
      </form>

      {result && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Classification:</h3>
          <p>{result.classification}</p>
          <h3 className="text-xl font-semibold mt-4">Extracted Text:</h3>
          <pre className="bg-gray-100 p-4">{result.text}</pre>
        </div>
      )}
    </div>
  );
}
