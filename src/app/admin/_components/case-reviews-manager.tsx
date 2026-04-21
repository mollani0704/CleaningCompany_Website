'use client';

import {type ReactNode, useEffect, useId, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {CaseReviewForm} from './case-review-form';
import {fetchReviews, reviewsQueryKey} from '../_lib/reviews';

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

type ReviewModalProps = {
  children: ReactNode;
  description: string;
  onClose: () => void;
  title: string;
};

function ReviewModal({
  children,
  description,
  onClose,
  title,
}: ReviewModalProps) {
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onClick={onClose}
    >
      <div
        className="max-h-[calc(100vh-4rem)] w-full max-w-3xl overflow-y-auto"
        onClick={event => event.stopPropagation()}
      >
        <div id={titleId} className="sr-only">
          {title}
        </div>
        <div id={descriptionId} className="sr-only">
          {description}
        </div>

        {children}
      </div>
    </div>
  );
}

export function CaseReviewsManager() {
  const [selectedReviewId, setSelectedReviewId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: reviews = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: reviewsQueryKey,
    queryFn: fetchReviews,
  });

  const errorMessage = error instanceof Error ? error.message : null;

  const selectedReview =
    selectedReviewId === null
      ? null
      : reviews.find(review => review.id === selectedReviewId) ?? null;

  const isEditing = selectedReview !== null;

  function openCreateModal() {
    setSelectedReviewId(null);
    setIsModalOpen(true);
  }

  function openEditModal(reviewId: string) {
    setSelectedReviewId(reviewId);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <section className="mt-10">
        <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold tracking-[0.2em] text-primary">
                REVIEW LIST
              </p>
              <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950">
                작업사례 목록
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                작업사례는 목록 중심으로 관리하고, 등록과 수정은 모달 창에서
                처리합니다.
              </p>
            </div>

            <button
              type="button"
              onClick={openCreateModal}
              aria-label="작업사례 등록"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-[0_16px_28px_rgba(30,58,138,0.22)] transition-transform duration-200 hover:scale-[1.03] hover:bg-primary-dark"
            >
              <span className="-translate-y-px text-[1.9rem] font-semibold leading-none">
                +
              </span>
            </button>
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
                      onClick={() => openEditModal(review.id)}
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
      </section>

      {isModalOpen ? (
        <ReviewModal
          title={isEditing ? '작업사례 수정' : '작업사례 등록'}
          description={
            isEditing
              ? '선택한 작업사례의 제목과 내용을 수정하는 모달입니다.'
              : '새 작업사례를 등록하는 모달입니다.'
          }
          onClose={closeModal}
        >
          <CaseReviewForm
            key={selectedReview?.id ?? 'new-review'}
            review={selectedReview}
            onCancel={closeModal}
            onSaved={async savedReviewId => {
              setSelectedReviewId(savedReviewId);
              closeModal();
            }}
          />
        </ReviewModal>
      ) : null}
    </>
  );
}
