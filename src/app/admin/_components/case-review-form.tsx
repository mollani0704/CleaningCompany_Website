'use client';

import {FormEvent, useState} from 'react';
import {supabase} from '@/app/lib/supabase';

export type ReviewRecord = {
  id: string;
  title: string;
  content: string;
  created_at: string | null;
};

type CaseReviewFormProps = {
  review?: ReviewRecord | null;
  onSaved?: (reviewId: string) => Promise<void> | void;
};

export function CaseReviewForm({
  review = null,
  onSaved,
}: CaseReviewFormProps) {
  const [title, setTitle] = useState(review?.title ?? '');
  const [content, setContent] = useState(review?.content ?? '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle || !trimmedContent) {
      setErrorMessage('제목과 내용을 모두 입력해주세요.');
      setMessage(null);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    setMessage(null);

    const {data, error} = review
      ? await supabase
          .from('reviews')
          .update({
            title: trimmedTitle,
            content: trimmedContent,
          })
          .eq('id', review.id)
          .select('id')
          .single()
      : await supabase
          .from('reviews')
          .insert([
            {
              title: trimmedTitle,
              content: trimmedContent,
            },
          ])
          .select('id')
          .single();

    if (error) {
      setErrorMessage(error.message);
      setIsSubmitting(false);
      return;
    }

    const savedReviewId = data?.id ?? review?.id;

    setMessage(
      review
        ? '작업사례가 reviews 테이블에서 수정되었습니다.'
        : '작업사례가 reviews 테이블에 등록되었습니다.',
    );

    if (!review) {
      setTitle('');
      setContent('');
    }

    if (savedReviewId) {
      await onSaved?.(savedReviewId);
    }

    setIsSubmitting(false);
  }

  return (
    <section className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 sm:p-7">
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

        <div className="flex justify-end">
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
