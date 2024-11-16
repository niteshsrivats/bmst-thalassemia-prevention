import type { Metadata } from 'next';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { Providers } from '~/providers/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'BMST Thalassemia prevention',
  description: 'BMST Thalassemia prevention',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-dvh overscroll-none">
        <Header />
        <Providers>
          {/* TODO not sure if there's a better way set height of content window */}
          <main className="max-h-[calc(100%-64px-76px)] overflow-auto px-5 py-2">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
