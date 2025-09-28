import "./globals.css";

export const metadata = {
  title: "Lawyer Platform | Coming Soon",
  description: "Lawyer Platform - Hukuk teknolojisi çözümleri yakında sizlerle.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}
