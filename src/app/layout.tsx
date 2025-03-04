import type { Metadata } from "next";
import "./globals.css";

//components
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
//shadcn io
import { ThemeProvider } from "@/components/theme-provider";
export const metadata: Metadata = {
  title: "School",
  description: "for school exams as teacher set  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
