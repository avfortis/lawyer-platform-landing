"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-[#E0F2FE] to-white w-full">
      <div className="flex flex-col items-center max-w-3xl text-center">
        {/* Logo */}
        <Image
          src="/avfortis-logo.png"
          alt="AvFortis Logo"
          width={120}
          height={120}
          className="mb-6"
        />

        {/* Başlık */}
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-[#1E293B]">
          AvFortis
        </h1>

        {/* Açıklama */}
        <p className="text-lg md:text-2xl text-[#334155] mb-8">
          Sitemiz yapım aşamasındadır. Yakında hizmetinizde olacağız.
        </p>

        <p className="text-lg md:text-2xl text-[#334155] mb-8">
          Eeee peki burada arayış nedir? Hep beraber göreceğiz... :D
        </p>

        {/* Alt mesaj */}
        <div className="text-[#2563EB] font-medium animate-pulse text-lg md:text-xl mb-8">
          ⚖️ Hukuk teknolojisiyle daha adil bir gelecek için çalışıyoruz...
        </div>

        {/* İletişim */}
        <div className="text-sm md:text-base text-[#475569]">
          İletişim:{" "}
          <a
            href="mailto:bnglmstf@gmail.com"
            className="underline text-[#2563EB] hover:text-[#1D4ED8] transition"
          >
            bnglmstf@gmail.com
          </a>
        </div>

        <footer className="mt-16 text-xs text-[#94A3B8]">
          © {new Date().getFullYear()} AvFortis. Tüm hakları saklıdır.
        </footer>
      </div>
    </main>
  );
}
