'use client';

import Image from 'next/image';
import {FormEvent, useEffect, useMemo, useState} from 'react';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  createReview,
  fetchReviewImages,
  reviewImagesQueryKey,
  reviewsQueryKey,
  updateReview,
  uploadReviewImages,
} from '../_lib/reviews';

export type ReviewRecord = {
  id: string;
  title: string;
  content: string;
  created_at: string | null;
};

type CaseReviewFormProps = {
  review?: ReviewRecord | null;
  onSaved?: (reviewId: string) => Promise<void> | void;
  onCancel?: () => void;
};

const MAX_REVIEW_IMAGES = 5;
const MAX_REVIEW_IMAGE_SIZE = 10 * 1024 * 1024;
const MAX_REVIEW_IMAGES_TOTAL_SIZE = 50 * 1024 * 1024;

function formatFileSize(size: number) {
  return `${(size / 1024 / 1024).toFixed(2)} MB`;
}

export function CaseReviewForm({
  review = null,
  onSaved,
  onCancel,
}: CaseReviewFormProps) {
  const [title, setTitle] = useState(review?.title ?? '');
  const [content, setContent] = useState(review?.content ?? '');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const {
    data: existingImages = [],
    error: existingImagesError,
    isLoading: isExistingImagesLoading,
  } = useQuery({
    queryKey: [...reviewImagesQueryKey, review?.id],
    queryFn: () => fetchReviewImages(review?.id ?? ''),
    enabled: Boolean(review?.id),
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

  const saveReviewMutation = useMutation({
    mutationFn: async ({
      content,
      title,
    }: {
      content: string;
      title: string;
    }) => {
      if (review) {
        return updateReview({
          reviewId: review.id,
          title,
          content,
        });
      }

      return createReview({
        title,
        content,
      });
    },
  });

  const isSubmitting = saveReviewMutation.isPending;
  const currentImageCount = existingImages.length + selectedFiles.length;

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const incomingFiles = Array.from(event.target.files ?? []);
    const nextFiles = [...selectedFiles, ...incomingFiles];
    const oversizedFile = incomingFiles.find(
      file => file.size > MAX_REVIEW_IMAGE_SIZE,
    );
    const nextTotalSize = nextFiles.reduce((total, file) => total + file.size, 0);

    event.target.value = '';

    if (incomingFiles.length === 0) {
      return;
    }

    if (currentImageCount + incomingFiles.length > MAX_REVIEW_IMAGES) {
      setErrorMessage('작업사례 이미지는 최대 5장까지 첨부할 수 있습니다.');
      setMessage(null);
      return;
    }

    if (oversizedFile) {
      setErrorMessage(
        `${oversizedFile.name} 파일이 10MB를 초과했습니다. 이미지 한 장은 10MB 이하로 첨부해주세요.`,
      );
      setMessage(null);
      return;
    }

    if (nextTotalSize > MAX_REVIEW_IMAGES_TOTAL_SIZE) {
      setErrorMessage('첨부 이미지 전체 용량은 50MB를 넘을 수 없습니다.');
      setMessage(null);
      return;
    }

    setSelectedFiles(nextFiles);
    setErrorMessage(null);
  }

  function removeSelectedFile(targetIndex: number) {
    setSelectedFiles(current =>
      current.filter((_, fileIndex) => fileIndex !== targetIndex),
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle || !trimmedContent) {
      setErrorMessage('제목과 내용을 모두 입력해주세요.');
      setMessage(null);
      return;
    }

    setErrorMessage(null);
    setMessage(null);

    try {
      const savedReviewId = await saveReviewMutation.mutateAsync({
        title: trimmedTitle,
        content: trimmedContent,
      });

      await uploadReviewImages({
        reviewId: savedReviewId,
        files: selectedFiles,
        startOrder: review ? existingImages.length : 0,
      });

      await queryClient.invalidateQueries({queryKey: reviewsQueryKey});
      await queryClient.invalidateQueries({queryKey: reviewImagesQueryKey});

      setMessage(
        review
          ? '작업사례가 reviews 테이블에서 수정되었습니다.'
          : '작업사례가 reviews 테이블에 등록되었습니다.',
      );

      if (!review) {
        setTitle('');
        setContent('');
      }
      setSelectedFiles([]);

      await onSaved?.(savedReviewId);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : '작업사례 저장 중 오류가 발생했습니다.',
      );
      return;
    }
  }

  return (
    <section className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold tracking-[0.2em] text-primary">
            CASE FORM
          </p>
          <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950">
            {review ? '작업사례 수정' : '작업사례 등록'}
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            {review
              ? '선택한 작업사례의 제목과 내용을 수정한 뒤 저장할 수 있습니다.'
              : '새 작업사례를 등록하려면 제목과 내용을 입력해주세요.'}
          </p>
        </div>

        {onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            aria-label="모달 닫기"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-semibold leading-none text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-100"
          >
            <span className="-translate-y-px">×</span>
          </button>
        ) : null}
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="case-title" className="text-sm font-semibold text-slate-700">
            제목
          </label>
          <input
            id="case-title"
            name="case-title"
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
            placeholder="예: 사무실 정기 청소 사례"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-primary"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="case-content" className="text-sm font-semibold text-slate-700">
            내용
          </label>
          <textarea
            id="case-content"
            name="case-content"
            rows={6}
            value={content}
            onChange={event => setContent(event.target.value)}
            placeholder="작업사례에 들어갈 설명을 입력하세요. 예: 바닥, 유리, 공용 공간을 정기적으로 관리한 사례입니다."
            className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-950 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-primary"
          />
        </div>

        <div className="grid gap-3">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <label
                htmlFor="case-images"
                className="text-sm font-semibold text-slate-700"
              >
                작업사례 이미지
              </label>
              <p className="mt-1 text-xs leading-6 text-slate-500">
                선택 사항입니다. 최대 5장, 한 장당 10MB, 전체 50MB까지 첨부할 수 있습니다.
              </p>
            </div>
            <span className="text-xs font-bold text-primary">
              {currentImageCount} / {MAX_REVIEW_IMAGES}
            </span>
          </div>

          <label
            htmlFor="case-images"
            className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-primary/30 bg-white px-4 py-6 text-center transition-colors duration-200 hover:bg-primary-soft"
          >
            <span className="text-sm font-bold text-primary">이미지 선택</span>
            <span className="text-xs leading-6 text-slate-500">
              JPG, PNG, WEBP 등 이미지 파일을 선택하세요.
            </span>
          </label>
          <input
            id="case-images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            disabled={isSubmitting || currentImageCount >= MAX_REVIEW_IMAGES}
            className="sr-only"
          />

          {isExistingImagesLoading ? (
            <p className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500">
              기존 이미지를 불러오는 중입니다.
            </p>
          ) : null}

          {existingImagesError ? (
            <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
              기존 이미지 조회 중 오류가 발생했습니다.
            </p>
          ) : null}

          {existingImages.length > 0 || selectedPreviewItems.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {existingImages.map(image => (
                <article
                  key={image.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image
                      src={image.image_url}
                      alt="등록된 작업사례 이미지"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 320px"
                    />
                  </div>
                  <div className="px-3 py-2 text-xs font-semibold text-slate-500">
                    등록된 이미지
                  </div>
                </article>
              ))}

              {selectedPreviewItems.map((item, index) => (
                <article
                  key={`${item.name}-${index}`}
                  className="overflow-hidden rounded-2xl border border-primary/30 bg-white"
                >
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image
                      src={item.url}
                      alt={item.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 px-3 py-2">
                    <div className="min-w-0">
                      <p className="truncate text-xs font-bold text-slate-700">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {item.sizeLabel}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeSelectedFile(index)}
                      className="shrink-0 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors duration-200 hover:border-primary hover:text-primary"
                    >
                      삭제
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-500">
              선택된 이미지가 없습니다. 이미지 없이도 등록과 수정이 가능합니다.
            </p>
          )}
        </div>

        {message ? (
          <p className="rounded-2xl bg-primary-soft px-4 py-3 text-sm font-medium text-primary">
            {message}
          </p>
        ) : null}

        {errorMessage ? (
          <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
            {errorMessage}
          </p>
        ) : null}

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          {onCancel ? (
            <button
              type="button"
              onClick={onCancel}
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-100"
            >
              취소
            </button>
          ) : null}
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting
              ? review
                ? '수정 중...'
                : '등록 중...'
              : review
                ? '수정하기'
                : '등록하기'}
          </button>
        </div>
      </form>
    </section>
  );
}
