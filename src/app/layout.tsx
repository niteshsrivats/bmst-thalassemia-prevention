import type { Metadata } from 'next';
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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
