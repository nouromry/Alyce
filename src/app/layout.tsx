import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Alyce Dashboard",
  description:
    "A comprehensive dashboard for Alyce Senteur des Merveilles, helping admin managing products, orders and users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.className} bg-light`}>
        <div className="flex flex-col sm:flex-row min-h-screen">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
