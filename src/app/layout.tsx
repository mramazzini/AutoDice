export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
import Navbar from "@/components/Navbar";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-blue-950 w-full text-white font-mono ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
