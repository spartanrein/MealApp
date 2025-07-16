import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import MainHeader from "./components/main-header";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious Meals, shared by a food-loving community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <MainHeader/>
        {children}
        </body>
    </html>
  );
}
