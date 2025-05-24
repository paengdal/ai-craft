'use client';

import Image from 'next/image';
import Link from 'next/link';
import portfolioData from '@/data/portfolio.json';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="px-6 py-12 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20">
        {portfolioData.map((item, index) => (
          <div key={index}>
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <Link
                href={item.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0  flex items-center justify-center text-white text-xl font-semibold">
                    <div className="rounded-full w-12 h-12 bg-black flex justify-center items-center opacity-30">
                      ▶
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-3 space-y-1 mt-3">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-lg font-semibold">{item.period}</p>
            </div>
            <div className="bg-gray-100 px-7 py-5 rounded-lg">
              <p className=" text-gray-600">{item.review}</p>
            </div>
            {/* <Link
              href={item.youtubeUrl}
              target="_blank"
              className="text-sm text-indigo-600 underline"
            >
              자세히 보기
            </Link> */}
          </div>
        ))}
      </div>
    </section>
  );
}
