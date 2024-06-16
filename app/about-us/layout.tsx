export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        &copy;Mest is
        {children}
    </div>
  )
}
