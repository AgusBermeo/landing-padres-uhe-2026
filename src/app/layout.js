import "./globals.css";
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Universidad Hemisferios",
  description: "Excelencia Académica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
