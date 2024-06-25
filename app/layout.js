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
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
