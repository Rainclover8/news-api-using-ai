"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

interface NewsItem {
  key: string;
  url: string;
  description: string;
  image: string;
  name: string;
  source: string;
  date: string;
}

export default function Home() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  useEffect(() => {
    fetch("https://api.collectapi.com/news/getNews?country=tr&tag=general", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `apikey ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setNews(data.result);
          setLoading(false);
        } else {
          console.error("Haberler alınamadı", data);
        }
      })
      .catch((err) => console.error("Hata:", err));
  }, []);
// ADS DENEME TEKRAR
  return (
    <main className="container mx-auto px-4 py-8">
    
      <h1 className="text-4xl font-bold mb-8">Hızlı Haberler</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
      {loading ? (
        <div className="flex justify-center items-center ">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <Card key={item.key} className="overflow-hidden shadow-lg hover:shadow-2xl  duration-500 hover:scale-105 transition-all">
              {item.image &&
                (loading ? (
                  <div>
                    {""}
                    <Loader />
                  </div>
                ) : (
                  <div className="">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  {item.description.length > 100
                  ? item.description.slice(0, 100) + "..."
                  : item.description
                  }
                  
                  </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center text-sm text-gray-500 ">
                <span>{new Date(item.date).toLocaleDateString("tr-TR")}</span>
                <Link
                  href={`/news/${item.key}`}
                  className="text-blue-600 hover:underline"
                >
                  Detayları Oku
                </Link>
              </CardFooter>
            </Card>
          ))}
 
        </div>
      )}
      
      {/* </div> */}
      <div className="mt-24">
        <Footer/>
     </div>
    </main>
  );
}
