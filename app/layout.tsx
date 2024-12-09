import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobHeader from "./components/MobHeader";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
        <div className="hidden lg:block">
        <Header  />
        </div>
        <div className="lg:hidden">
          <MobHeader />
        </div>
        {children}
        <div>
          <Footer />
        </div>
        </body>
    </html>
  );
}
