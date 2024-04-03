import { Footer } from './components/footer';
import { Header } from './components/header';

import './globals.css';

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
        <div className='grow'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
