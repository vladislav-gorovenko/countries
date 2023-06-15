import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Header from "./components/Header";
import AuthProvider from "./components/providers/authProvider";
import ThemeProvider from "./components/providers/themeProvider";

const nunito = Nunito_Sans({ subsets: ["latin"] });

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
      <body
        className={`${nunito.className} bg-background dark:bg-background-dark dark:text-text-dark`}
      >
        <AuthProvider>
          <ThemeProvider>
            <Header />
            <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
