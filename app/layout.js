export const metadata = {
  title: "Lucy Custodio Dance",
  description: "Professional dance showcase"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
