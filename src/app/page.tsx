export const dynamic = 'force-dynamic';
export const revalidate = 0;

import MainPage from '@/components/pages/MainPage';

export default async function HomePage() {
  return <MainPage />;
}
