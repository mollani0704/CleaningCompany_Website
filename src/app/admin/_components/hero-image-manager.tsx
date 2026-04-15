'use client';

import Image from 'next/image';
import {useEffect, useMemo, useState} from 'react';

const MAX_HERO_IMAGES = 7;

export function HeroImageManager() {
  const [files, setFiles] = useState<File[]>([]);

  const previewItems = useMemo(
    () =>
      files.map(file => ({
        name: file.name,
        sizeLabel: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        url: URL.createObjectURL(file),
      })),
    [files]
  );

  useEffect(() => {
    return () => {
      previewItems.forEach(item => URL.revokeObjectURL(item.url));
    };
  }, [previewItems]);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.target.files ?? []);

    if (selectedFiles.length > MAX_HERO_IMAGES) {
      alert('히어로 이미지는 최대 7장까지만 업로드할 수 있습니다.');
      setFiles(selectedFiles.slice(0, MAX_HERO_IMAGES));
      event.target.value = '';
      return;
    }

    setFiles(selectedFiles);
    event.target.value = '';
  }

  function removeImage(targetName: string) {
    setFiles(current => current.filter(file => file.name !== targetName));
  }

  return (
    <section className="mt-12 rounded-[28px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-primary">
            HERO IMAGE MANAGER
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-950">
            메인 히어로 이미지 관리
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            메인페이지 히어로 슬라이드에 사용할 이미지를 최대 7장까지 올릴 수
            있습니다. 업로드 후 아래에서 바로 미리보기를 확인할 수 있습니다.
          </p>
        </div>
        <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
          {files.length} / {MAX_HERO_IMAGES}
        </div>
      </div>

      <div className="mt-6 rounded-[24px] border border-dashed border-primary/30 bg-white p-6">
        <label
          htmlFor="hero-image-upload"
          className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-[20px] bg-primary-soft px-6 py-10 text-center transition-colors duration-200 hover:bg-primary-muted/60"
        >
          <span className="text-sm font-bold tracking-[0.16em] text-primary">
            이미지 업로드
          </span>
          <span className="text-sm leading-7 text-slate-600">
            JPG, PNG 등 이미지를 선택하세요. 7장을 초과하면 경고창이 뜹니다.
          </span>
        </label>
        <input
          id="hero-image-upload"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="sr-only"
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {previewItems.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-10 text-center text-sm text-slate-500 sm:col-span-2 xl:col-span-3">
            아직 업로드된 이미지가 없습니다.
          </div>
        ) : (
          previewItems.map(item => (
            <article
              key={item.name}
              className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_14px_32px_rgba(15,23,42,0.06)]"
            >
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image
                  src={item.url}
                  alt={item.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-4">
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-slate-950">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{item.sizeLabel}</p>
                </div>
                <button
                  type="button"
                  onClick={() => removeImage(item.name)}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors duration-200 hover:border-primary hover:text-primary"
                >
                  삭제
                </button>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
