import { Footer } from './components/footer';
import { Header } from './components/header';

import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { TanstackProvider } from '@/tanstack-query/tanstack-provider';

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>Realtime cinema</title>
      </head>
      <body className='w-full h-full m-0 p-0 flex flex-col min-h-[100vh]'>
        <Header />
        <TanstackProvider>
          <div className='grow'>{children}</div>
        </TanstackProvider>
        <Footer />
      </body>
    </html>
  );
}
