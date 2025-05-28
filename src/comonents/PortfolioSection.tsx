'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import portfolioData from '@/data/portfolio.json';

const PAGE_SIZE = 6;

export default function PortfolioSection() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const totalCount = portfolioData.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, totalCount));
  };

  return (
    <section id="portfolio" className="px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20">
        {portfolioData.slice(0, visibleCount).map((item, index) => (
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
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold hover:bg-black/25">
                    <div className="rounded-full w-12 h-12 bg-black flex justify-center items-center opacity-30">
                      ▶
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-3 space-y-1 mt-3">
              <h3 className="text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="tracking-tight">{item.period}</p>
            </div>
            <div className="bg-gray-100 h-[7.2rem] px-7 py-5 mt-3 rounded-lg flex justify-start">
              <p className="text-gray-500 tracking-tight whitespace-pre-line line-clamp-3">
                {item.review}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 더 보기 버튼 */}
      <div className="flex justify-center mt-14">
        <button
          onClick={handleLoadMore}
          disabled={visibleCount >= totalCount}
          className="inline-block text-xl font-light px-16 py-5 rounded-full hover:bg-gray-100 transition border border-gray-500 disabled:opacity-50 disabled:cursor-default"
        >
          더 보기 ({visibleCount}/{totalCount})
        </button>
      </div>
    </section>
  );
}
