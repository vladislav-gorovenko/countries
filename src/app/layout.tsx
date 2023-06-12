import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Providers from "./providers";
import Header from "./components/Header";

const inter = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Countries App.",
  description: "The whole world is at your finger tips.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
