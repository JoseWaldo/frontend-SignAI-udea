import "./globals.css";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "SignAI",
  description: "Aplicación SignAI UdeA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
