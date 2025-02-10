import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "@/app/globals.css";

const roboto = Roboto({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  style: ['normal', 'italic'], 
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Nikhil Sai Portfolio",
  description: "nikhil sai ankilla portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
