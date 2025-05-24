'use client';

import Image from 'next/image';
import Link from 'next/link';
import portfolioData from '@/data/portfolio.json';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="px-6 py-12 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.map((item, index) => (
          <div key={index}>
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <Link
                href={item.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-semibold">
                    ▶ 재생
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-3 space-y-1">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-lg font-semibold">{item.period}</p>
              <p className=" text-gray-700">{item.review}</p>
              {item.customerProvided && (
                <p className="text-xs text-blue-500 mt-2">
                  고객 제공 자료 활용
                </p>
              )}
              <Link
                href={item.youtubeUrl}
                target="_blank"
                className="text-sm text-indigo-600 underline"
              >
                자세히 보기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
