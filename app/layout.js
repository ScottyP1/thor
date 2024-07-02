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
        <div className="linearBackground"></div> {/* Add the gradient overlay */}
        <Nav />
        <main className="min-h-full bg-transparent text-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
