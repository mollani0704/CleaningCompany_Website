'use client';

import {useEffect, useState} from 'react';
import {supabase} from '@/app/lib/supabase';
import {CaseReviewForm, type ReviewRecord} from './case-review-form';

function formatReviewDate(dateString: string | null) {
  if (!dateString) {
    return '날짜 없음';
  }

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return '날짜 없음';
  }

  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

type CaseReviewsManagerProps = {
  initialError: string | null;
  initialReviews: ReviewRecord[];
};

export function CaseReviewsManager({
  initialError,
  initialReviews,
}: CaseReviewsManagerProps) {
  const [reviews, setReviews] = useState(initialReviews);
  const [selectedReviewId, setSelectedReviewId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(initialError);

  async function loadReviews(selectedId?: string | null) {
    setIsLoading(true);
    setErrorMessage(null);

    const {data, error} = await supabase
      .from('reviews')
      .select('id, title, content, created_at')
      .order('created_at', {ascending: false});

    if (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
      return;
    }

    const nextReviews = (data ?? []) as ReviewRecord[];
    setReviews(nextReviews);

    const nextSelectedId =
      selectedId === undefined ? selectedReviewId : selectedId;

    if (nextSelectedId) {
      const hasSelectedReview = nextReviews.some(
        review => review.id === nextSelectedId,
      );

      setSelectedReviewId(hasSelectedReview ? nextSelectedId : null);
    } else {
      setSelectedReviewId(null);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    let isActive = true;

    async function refreshReviews() {
      const {data, error} = await supabase
        .from('reviews')
        .select('id, title, content, created_at')
        .order('created_at', {ascending: false});

      if (!isActive) {
        return;
      }

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      setErrorMessage(null);
      setReviews((data ?? []) as ReviewRecord[]);
    }

    void refreshReviews();

    return () => {
      isActive = false;
    };
  }, []);

  const selectedReview =
    reviews.find(review => review.id === selectedReviewId) ?? null;

  return (
    <section className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 sm:p-7">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold tracking-[0.2em] text-primary">
            REVIEW LIST
          </p>
          <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950">
            작업사례 목록
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            제목과 날짜만 보여주고, 목록을 클릭하면 오른쪽에서 바로 수정할 수
            있습니다.
          </p>
        </div>

        {errorMessage ? (
          <p className="mt-6 rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
            {errorMessage}
          </p>
        ) : null}

        {isLoading ? (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-6 text-sm text-slate-500">
            작업사례 목록을 불러오는 중입니다.
          </div>
        ) : null}

        {!isLoading && reviews.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-6 text-sm text-slate-500">
            등록된 작업사례가 없습니다.
          </div>
        ) : null}

        {!isLoading && reviews.length > 0 ? (
          <ul className="mt-6 grid gap-3">
            {reviews.map(review => {
              const isSelected = review.id === selectedReviewId;

              return (
                <li key={review.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedReviewId(review.id)}
                    className={`w-full rounded-2xl border px-4 py-4 text-left transition-colors duration-200 ${
                      isSelected
                        ? 'border-primary bg-primary-soft'
                        : 'border-slate-200 bg-white hover:border-primary/40 hover:bg-slate-50'
                    }`}
                  >
                    <p className="text-xs font-bold tracking-[0.18em] text-slate-500">
                      {formatReviewDate(review.created_at)}
                    </p>
                    <h3 className="mt-2 text-base font-bold text-slate-950">
                      {review.title}
                    </h3>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>

      <CaseReviewForm
        key={selectedReview?.id ?? 'new-review'}
        review={selectedReview}
        onSaved={async savedReviewId => {
          await loadReviews(savedReviewId);
        }}
      />
    </section>
  );
}
