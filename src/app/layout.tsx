import "./globals.css";
import { Roboto } from "next/font/google";

import StoreProvider from "@/store/StoreProvider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="ru">
        <body className={roboto.className}>
          <div id="modal"></div>
          <div id="dropdown"></div>
          <Header />
          <main className="content">{children}</main>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
