import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI CRAFT - AI 영상 제작',
  description: '50만원 3일 30초 고퀄 영상 제작 서비스',
  openGraph: {
    title: 'AI CRAFT - AI 영상 제작',
    description: '50만원 3일 30초 고퀄 영상 제작 서비스',
    url: 'https://ai-craft-azure.vercel.app',
    siteName: 'AI CRAFT',
    images: [
      {
        url: 'https://i.imgur.com/Zs5pczi.png',
        width: 1200,
        height: 675,
        alt: '무빙 서비스 이미지',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI CRAFT - AI 영상 제작',
    description: '50만원 3일 30초 고퀄 영상 제작 서비스',
    images: ['https://i.imgur.com/Zs5pczi.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
