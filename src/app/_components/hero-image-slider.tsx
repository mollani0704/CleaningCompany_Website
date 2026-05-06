'use client';

import Image from 'next/image';
import {useEffect, useMemo, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {fetchMainImages, mainImagesQueryKey} from '@/app/lib/main-images';

const fallbackSlideImages = [
  '/images/company_logo.png',
  '/images/company_logo.png',
  '/images/company_logo.png',
  '/images/company_logo.png',
  '/images/company_logo.png',
  '/images/company_logo.png',
  '/images/company_logo.png',
];

const HeroImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const {data: mainImages = []} = useQuery({
    queryKey: mainImagesQueryKey,
    queryFn: fetchMainImages,
  });
  const slideImages = useMemo(
    () =>
      mainImages.length > 0
        ? mainImages.map(image => image.image_url)
        : fallbackSlideImages,
    [mainImages],
  );
  const trackImages = useMemo(
    () =>
      slideImages.length > 1 ? [...slideImages, slideImages[0]] : slideImages,
    [slideImages],
  );
  const visibleIndex =
    currentIndex > slideImages.length
      ? currentIndex % slideImages.length
      : currentIndex;

  useEffect(() => {
    if (slideImages.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [slideImages.length]);

  const handleTransitionEnd = () => {
    if (currentIndex !== slideImages.length) {
      return;
    }

    setIsTransitionEnabled(false);
    setCurrentIndex(0);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
    });
  };

  return (
    <div className="overflow-hidden rounded-[32px] border border-primary-border/70 bg-white shadow-[0_24px_60px_rgba(13,148,136,0.14)]">
      <div
        className={`flex h-[460px] w-full ${
          isTransitionEnabled
            ? 'transition-transform duration-700 ease-out'
            : ''
        }`}
        style={{transform: `translateX(-${visibleIndex * 100}%)`}}
        onTransitionEnd={handleTransitionEnd}
      >
        {trackImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative h-full w-full shrink-0 bg-white"
          >
            <Image
              src={src}
              alt={`대주종합청소 대표 이미지 ${
                (index % slideImages.length) + 1
              }`}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              unoptimized={src.startsWith('http')}
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroImageSlider;
