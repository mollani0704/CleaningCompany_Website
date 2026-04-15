'use client';

import Image from "next/image";
import {useEffect, useState} from "react";

const slideImages = [
  "/images/company_logo.png",
  "/images/company_logo.png",
  "/images/company_logo.png",
  "/images/company_logo.png",
  "/images/company_logo.png",
  "/images/company_logo.png",
  "/images/company_logo.png",
];

export function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slideImages.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden rounded-[32px] border border-primary-border/70 bg-white shadow-[0_24px_60px_rgba(13,148,136,0.14)]">
      <div
        className="flex h-[460px] w-full transition-transform duration-700 ease-out"
        style={{transform: `translateX(-${currentIndex * 100}%)`}}
      >
        {slideImages.map((src, index) => (
          <div key={`${src}-${index}`} className="relative h-full w-full shrink-0 bg-white">
            <Image
              src={src}
              alt={`대주종합청소 대표 이미지 ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
