'use client';

import {FormEvent, useState} from 'react';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {
  createReview,
  reviewsQueryKey,
  updateReview,
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

export function CaseReviewForm({
  review = null,
  onSaved,
  onCancel,
}: CaseReviewFormProps) {
  const [title, setTitle] = useState(review?.title ?? '');
  const [content, setContent] = useState(review?.content ?? '');
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const queryClient = useQueryClient();

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

      await queryClient.invalidateQueries({queryKey: reviewsQueryKey});

      setMessage(
        review
          ? '작업사례가 reviews 테이블에서 수정되었습니다.'
          : '작업사례가 reviews 테이블에 등록되었습니다.',
      );

      if (!review) {
        setTitle('');
        setContent('');
      }

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
