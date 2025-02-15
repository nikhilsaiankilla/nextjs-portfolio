import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster"
import "@/app/globals.css";
const inter = Sour_Gummy({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nikhil Sai Portfolio",
  description: "Portfolio of Nikhil Sai Ankilla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full min-h-screen bg-light-primary dark:bg-dark-primary transition-all duration-300 ease-out`}
      >
        <Toaster />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
