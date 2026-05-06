'use client';

import Image from 'next/image';
import {useEffect, useMemo, useState} from 'react';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  deleteMainImage,
  fetchMainImages,
  mainImagesQueryKey,
  MAX_MAIN_IMAGES,
  MAX_MAIN_IMAGES_TOTAL_SIZE,
  uploadMainImages,
} from '@/app/lib/main-images';

const formatFileSize = (size: number) => {
  return `${(size / 1024 / 1024).toFixed(2)} MB`;
};

const HeroImageManager = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const {
    data: mainImages = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: mainImagesQueryKey,
    queryFn: fetchMainImages,
  });

  const selectedPreviewItems = useMemo(
    () =>
      selectedFiles.map(file => ({
        name: file.name,
        sizeLabel: formatFileSize(file.size),
        url: URL.createObjectURL(file),
      })),
    [selectedFiles],
  );

  useEffect(() => {
    return () => {
      selectedPreviewItems.forEach(item => URL.revokeObjectURL(item.url));
    };
  }, [selectedPreviewItems]);

  const uploadMutation = useMutation({
    mutationFn: () =>
      uploadMainImages({
        existingImages: mainImages,
        files: selectedFiles,
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: mainImagesQueryKey});
      setSelectedFiles([]);
      setMessage('메인 히어로 이미지가 등록되었습니다.');
      setErrorMessage(null);
    },
    onError: mutationError => {
      setErrorMessage(
        mutationError instanceof Error
          ? mutationError.message
          : '메인 히어로 이미지 업로드 중 오류가 발생했습니다.',
      );
      setMessage(null);
    },
  });
  const deleteMutation = useMutation({
    mutationFn: deleteMainImage,
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: mainImagesQueryKey});
      setMessage('메인 히어로 이미지가 삭제되었습니다.');
      setErrorMessage(null);
    },
    onError: mutationError => {
      setErrorMessage(
        mutationError instanceof Error
          ? mutationError.message
          : '메인 히어로 이미지 삭제 중 오류가 발생했습니다.',
      );
      setMessage(null);
    },
  });

  const existingTotalSize = mainImages.reduce(
    (total, image) => total + (image.file_size_bytes ?? 0),
    0,
  );
  const selectedTotalSize = selectedFiles.reduce(
    (total, file) => total + file.size,
    0,
  );
  const currentImageCount = mainImages.length + selectedFiles.length;
  const totalSize = existingTotalSize + selectedTotalSize;
  const isUploading = uploadMutation.isPending;
  const isDeleting = deleteMutation.isPending;
  const queryErrorMessage = error instanceof Error ? error.message : null;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const incomingFiles = Array.from(event.target.files ?? []);
    const nextFiles = [...selectedFiles, ...incomingFiles];
    const nextTotalSize =
      existingTotalSize +
      nextFiles.reduce((total, file) => total + file.size, 0);

    event.target.value = '';

    if (incomingFiles.length === 0) {
      return;
    }

    if (mainImages.length + nextFiles.length > MAX_MAIN_IMAGES) {
      setErrorMessage(
        '메인 히어로 이미지는 최대 7장까지 업로드할 수 있습니다.',
      );
      setMessage(null);
      return;
    }

    if (nextTotalSize > MAX_MAIN_IMAGES_TOTAL_SIZE) {
      setErrorMessage(
        '메인 히어로 이미지 전체 용량은 50MB를 넘을 수 없습니다.',
      );
      setMessage(null);
      return;
    }

    setSelectedFiles(nextFiles);
    setErrorMessage(null);
    setMessage(null);
  };

  const removeSelectedFile = (targetIndex: number) => {
    setSelectedFiles(current =>
      current.filter((_, fileIndex) => fileIndex !== targetIndex),
    );
  };

  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      setErrorMessage('업로드할 이미지를 먼저 선택해주세요.');
      setMessage(null);
      return;
    }

    uploadMutation.mutate();
  };

  const handleExistingImageDelete = ({
    imageId,
    storagePath,
  }: {
    imageId: string;
    storagePath: string | null;
  }) => {
    if (!storagePath) {
      setErrorMessage('삭제할 이미지의 storage_path를 확인할 수 없습니다.');
      setMessage(null);
      return;
    }

    deleteMutation.mutate({
      imageId,
      storagePath,
    });
  };

  return (
    <section className="mt-12 rounded-[28px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-primary">
            HERO IMAGE MANAGER
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-950">
            메인 히어로 이미지 관리
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            메인페이지 히어로 슬라이드에 사용할 이미지를 최대 7장, 전체 50MB까지
            등록할 수 있습니다.
          </p>
        </div>
        <div className="rounded-2xl bg-white px-4 py-3 text-right text-sm font-semibold text-primary shadow-sm">
          <p>
            {currentImageCount} / {MAX_MAIN_IMAGES}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {formatFileSize(totalSize)} / 50.00 MB
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-[24px] border border-dashed border-primary/30 bg-white p-6">
        <label
          htmlFor="hero-image-upload"
          className={`flex flex-col items-center justify-center gap-3 rounded-[20px] bg-primary-soft px-6 py-10 text-center transition-colors duration-200 ${
            currentImageCount >= MAX_MAIN_IMAGES || isUploading
              ? 'cursor-not-allowed opacity-60'
              : 'cursor-pointer hover:bg-primary-muted/60'
          }`}
        >
          <span className="text-sm font-bold tracking-[0.16em] text-primary">
            이미지 선택
          </span>
          <span className="text-sm leading-7 text-slate-600">
            JPG, PNG, WEBP 등 이미지 파일을 선택한 뒤 업로드 버튼을 눌러주세요.
          </span>
        </label>
        <input
          id="hero-image-upload"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          disabled={currentImageCount >= MAX_MAIN_IMAGES || isUploading}
          className="sr-only"
        />

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={handleUpload}
            disabled={selectedFiles.length === 0 || isUploading || isLoading}
            className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isUploading ? '업로드 중...' : '선택 이미지 업로드'}
          </button>
        </div>
      </div>

      {queryErrorMessage ? (
        <p className="mt-6 rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          {queryErrorMessage}
        </p>
      ) : null}

      {message ? (
        <p className="mt-6 rounded-2xl bg-primary-soft px-4 py-3 text-sm font-medium text-primary">
          {message}
        </p>
      ) : null}

      {errorMessage ? (
        <p className="mt-6 rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          {errorMessage}
        </p>
      ) : null}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {isLoading ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-10 text-center text-sm text-slate-500 sm:col-span-2 xl:col-span-3">
            등록된 이미지를 불러오는 중입니다.
          </div>
        ) : null}

        {!isLoading && mainImages.length === 0 && selectedFiles.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-10 text-center text-sm text-slate-500 sm:col-span-2 xl:col-span-3">
            아직 등록된 이미지가 없습니다.
          </div>
        ) : null}

        {mainImages.map(image => (
          <article
            key={image.id}
            className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_14px_32px_rgba(15,23,42,0.06)]"
          >
            <div className="relative aspect-[16/10] w-full bg-slate-100">
              <Image
                src={image.image_url}
                alt={image.file_name ?? '등록된 메인 히어로 이미지'}
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-slate-950">
                  {image.file_name ?? '등록된 이미지'}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {formatFileSize(image.file_size_bytes ?? 0)}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleExistingImageDelete({
                    imageId: image.id,
                    storagePath: image.storage_path ?? image.file_path,
                  })
                }
                disabled={isUploading || isDeleting}
                className="shrink-0 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors duration-200 hover:border-rose-300 hover:text-rose-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isDeleting ? '삭제 중...' : '삭제'}
              </button>
            </div>
          </article>
        ))}

        {selectedPreviewItems.map((item, index) => (
          <article
            key={`${item.name}-${index}`}
            className="overflow-hidden rounded-[24px] border border-primary/30 bg-white shadow-[0_14px_32px_rgba(15,23,42,0.06)]"
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
                <p className="mt-1 text-xs text-slate-500">
                  선택됨 / {item.sizeLabel}
                </p>
              </div>
              <button
                type="button"
                onClick={() => removeSelectedFile(index)}
                disabled={isUploading}
                className="shrink-0 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors duration-200 hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                삭제
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HeroImageManager;
