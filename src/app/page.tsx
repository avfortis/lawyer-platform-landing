"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // 🔹 6 ay sonrası
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 6);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen p-6 bg-gradient-to-b from-[#E0F2FE] to-white">
      <div className="flex flex-col items-center max-w-xl">
        {/* 🔹 Logo */}
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

        <p className="text-lg md:text-2xl text-[#334155] mb-10">
          Sitemiz yapım aşamasındadır. Yakında hizmetinizde olacağız.
        </p>

        {/* 🔹 Geri Sayım Sayacı */}
        <div className="bg-[#2563EB] text-white rounded-3xl px-10 py-8 mb-8 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 uppercase tracking-wide">
            Açılışımıza Kalan Süre
          </h2>
          <div className="flex gap-6 justify-center text-4xl md:text-6xl font-bold">
            <div className="flex flex-col items-center">
              <span>{timeLeft.days}</span>
              <span className="text-sm md:text-base font-normal mt-1">Gün</span>
            </div>
            <div className="flex flex-col items-center">
              <span>{timeLeft.hours}</span>
              <span className="text-sm md:text-base font-normal mt-1">Saat</span>
            </div>
            <div className="flex flex-col items-center">
              <span>{timeLeft.minutes}</span>
              <span className="text-sm md:text-base font-normal mt-1">Dakika</span>
            </div>
            <div className="flex flex-col items-center">
              <span>{timeLeft.seconds}</span>
              <span className="text-sm md:text-base font-normal mt-1">Saniye</span>
            </div>
          </div>
        </div>

        {/* Alt Mesaj */}
        <div className="text-[#2563EB] font-medium animate-pulse text-lg md:text-xl">
          ⚖️ Hukuk teknolojisiyle daha adil bir gelecek için çalışıyoruz...
        </div>

        {/* İletişim */}
        <div className="mt-10 text-sm md:text-base text-[#475569]">
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
