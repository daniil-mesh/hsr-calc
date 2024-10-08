import './globals.css';
import Footer from '@/layout/footer/footer';
import Header from '@/layout/header/header';
import Main from '@/layout/main/main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HSR Simple Calculator',
  description: 'HSR Simple Calculator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-fill-200 text-fill-900 dark:bg-fill-800 dark:text-fill-200">
        <div className="min-h-dvh flex flex-col gap-8 lg:gap-12">
          <Header />
          <Main className="grow mx-auto">{children}</Main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
