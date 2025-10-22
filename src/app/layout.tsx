export const dynamic = 'force-dynamic';
export const revalidate = 0;

import './globals.css';
import Script from 'next/script';

import { pretendard } from '@/utils/font';

import type { Metadata } from 'next';
import GlobalProvider from '@/provider/global';

export const metadata: Metadata = {
  title: 'NightTrip',
  description: '밤 거리 여행 추천 및 기록 서비스',
  keywords: [
    '밤거리',
    '야경',
    '여행',
    '관광',
    '도시',
    '야간투어',
    '여행추천',
    '야간명소',
    '밤에볼거리',
    '야간활동',
    '도시투어',
    '관광지',
    '여행정보',
  ].join(', '),
  openGraph: {
    siteName: 'NightTrip',
    title: 'NightTrip - 밤 거리 여행 추천 서비스',
    description:
      '아름다운 밤거리와 야경을 추천하는 여행 서비스. 관람차, 야경, 밤에 볼거리를 체험해보세요.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://nighttrip.swygbro.com/',
  },
  twitter: {
    title: '밤 거리 여행 추천 및 기록 서비스',
    description: '아름다운 밤거리와 야경을 추천하는 여행 서비스',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} font-pretendard`}>
      <head>
        <Script src="https://cdn.swygbro.com/public/widget/swyg-widget.js" strategy="lazyOnload" />
      </head>
      <body>
        <main className="mobile-container">
          <GlobalProvider>{children}</GlobalProvider>
        </main>
      </body>
    </html>
  );
}
