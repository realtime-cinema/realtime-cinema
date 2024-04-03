import './globals.css';

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>My App</title>
      </head>
      <body className='w-full h-full m-0 p-0'>{children}</body>
    </html>
  );
}
