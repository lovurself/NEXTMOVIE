import Header from "../components/header";

export const metadata = {
  title: "NEXTMOVIE",
  description: "Movie web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
