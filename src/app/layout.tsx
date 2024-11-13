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
          {/* TODO not sure if there's a better way to do this */}
          <main className="h-[calc(100%-64px-76px)] px-5">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
