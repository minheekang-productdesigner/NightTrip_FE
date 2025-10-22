'use client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { useEffect, useState } from 'react';

export default function SearchPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search`);
        const result = await res.json();
        setData(result);
      } catch {
        setData([]); // 서버가 없어도 화면은 뜨게
      }
    })();
  }, []);

  return (
    <div>
      <h2>Search Result</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
