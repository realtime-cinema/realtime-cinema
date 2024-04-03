import Link from 'next/link';

import { Footer } from '@/app/components/footer';
import { Header } from '@/app/components/header';

export default function Home() {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <Header />
      <h1>TrANG NAY CHUA LAM</h1>
      <div className='flex flex-col grow'>
        <Link href='/film'>/film</Link>
        <Link href='/film/1'>/film/1</Link>
        <Link href='/pickseat'>/pickseat</Link>
      </div>
      <Footer />
    </div>
  );
}
