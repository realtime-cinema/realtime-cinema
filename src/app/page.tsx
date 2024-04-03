import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>TrANG NAY CHUA LAM</h1>
      <div className='flex flex-col grow'>
        <Link href='/film'>/film</Link>
        <Link href='/film/1'>/film/1</Link>
        <Link href='/pickseat'>/pickseat</Link>
        <Link href='/book'>/book</Link>
      </div>
    </div>
  );
}
