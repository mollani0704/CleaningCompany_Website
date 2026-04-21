import {supabase} from '@/app/lib/supabase';
import {type ReviewRecord} from '../_components/case-review-form';

export const reviewsQueryKey = ['reviews'] as const;

export async function fetchReviews(): Promise<ReviewRecord[]> {
  const {data, error} = await supabase
    .from('reviews')
    .select('id, title, content, created_at')
    .order('created_at', {ascending: false});

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as ReviewRecord[];
}

type SaveReviewInput = {
  content: string;
  title: string;
};

export async function createReview({
  content,
  title,
}: SaveReviewInput): Promise<string> {
  const {data, error} = await supabase
    .from('reviews')
    .insert([
      {
        title,
        content,
      },
    ])
    .select('id')
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if (!data?.id) {
    throw new Error('새 작업사례 ID를 확인할 수 없습니다.');
  }

  return data.id;
}

type UpdateReviewInput = SaveReviewInput & {
  reviewId: string;
};

export async function updateReview({
  content,
  reviewId,
  title,
}: UpdateReviewInput): Promise<string> {
  const {error} = await supabase
    .from('reviews')
    .update({
      title,
      content,
    })
    .eq('id', reviewId);

  if (error) {
    throw new Error(error.message);
  }

  return reviewId;
}
