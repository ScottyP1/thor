import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import './globals.css';

export const metadata = {
  title: 'Thor Transport',
  description: 'Thor Transport LLC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="min-h-full bg-black linearBackground text-center text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
