'use client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { useEffect, useState } from 'react';

export default function SearchPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/search`,
          { cache: 'no-store' } // ✅ 캐시 비활성화 (빌드 타임아웃 방지)
        );

        if (!res.ok) throw new Error('Failed to fetch');
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error('Search fetch error:', error);
        setData([]); // 서버 오류 시에도 화면 표시
      }
    })();
  }, []);

  return (
    <div>
      <h2>Search Result</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
