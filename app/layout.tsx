import "../styles/global.css"
import { Metadata } from "next"
import Navigation from "../components/navigation"
import Sidebar from "../components/sidebar"

export const metadata: Metadata = {
  title: {
    template:"%s | Next Movies",
    default:"Next Movies"
  },
  description: 'The best Movies on the best framwork',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {/* <Sidebar /> */}
        {children}
      </body>
    </html>
  )
}
