import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Summit Row Global',
  description:
    'Global physical commodities trading, logistics, and risk management across energy, metals, and agricultural markets.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
