import { notFound } from "next/navigation";
interface Params {
  id: string;
}
interface NewsItem {
  key: string;
  url: string;
  description: string;
  image: string;
  name: string;
  source: string;
  date: string;
}
export default async function NewsDetail({
  params,
}: {
  params: Promise<Params>; 
}) {
  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const { id } = await params;
  const res = await fetch(
    `https://api.collectapi.com/news/getNews?country=tr&tag=general`,
    {
      headers: {
        "Content-Type": "application/json",
        authorization: `apikey ${API_KEY}`,
      },
    }
  );

  if (!res.ok) {
    return notFound();
  }
  const data = await res.json();
  const newsItem = data.result.find((item: NewsItem) => item.key === id);
  if (!newsItem) {
    return notFound();
  }

  // reklam denemesi için birkaç değişiklik
  return (
    <div className="p-4 flex  justify-center items-center flex-col gap-y-4">
      <h1 className="text-2xl font-bold mb-4">{newsItem.name}</h1>
      <p className="text-gray-600 mb-2">{newsItem.description}</p>
      {newsItem.image && (
        <img
          src={newsItem.image}
          alt={newsItem.name}
          className="rounded-lg w-full max-w-lg"
        />
      )}
      <p className="text-sm text-gray-500 mt-2">Kaynak: {newsItem.source}</p>
      <a
        href={newsItem.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline block mt-4"
      >
        Haberi Oku
      </a>
      <a
        href="/"
        rel="noopener noreferrer"
        className="block mt-4 border p-3 rounded-lg bg-red-400 hover:bg-red-500 text-white"
      >
        Ana Sayfaya Dön
      </a>
    </div>
  );
}
