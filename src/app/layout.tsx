import type { Metadata } from 'next';
import { Providers } from '~/providers/Providers';
import './globals.css';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

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
      <body>
        <Header />
        <div className="h-16 w-full" />
        <Providers>
          <main className="px-5">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
