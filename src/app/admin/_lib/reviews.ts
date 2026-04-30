import {supabase} from '@/app/lib/supabase';
import {type ReviewRecord} from '../_components/case-review-form';

export const reviewsQueryKey = ['reviews'] as const;
export const reviewImagesQueryKey = ['review-images'] as const;

const REVIEW_IMAGES_BUCKET = 'review-images';

export type ReviewImageRecord = {
  id: string;
  review_id: string;
  image_url: string;
  storage_path: string;
  display_order: number | null;
  created_at: string | null;
};

export const fetchReviews = async (): Promise<ReviewRecord[]> => {
  const {data, error} = await supabase
    .from('reviews')
    .select('id, title, content, created_at')
    .order('created_at', {ascending: false});

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as ReviewRecord[];
};

type SaveReviewInput = {
  content: string;
  title: string;
};

export const createReview = async ({
  content,
  title,
}: SaveReviewInput): Promise<string> => {
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
};

type UpdateReviewInput = SaveReviewInput & {
  reviewId: string;
};

export const updateReview = async ({
  content,
  reviewId,
  title,
}: UpdateReviewInput): Promise<string> => {
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
};

export const fetchReviewImages = async (
  reviewId: string,
): Promise<ReviewImageRecord[]> => {
  const {data, error} = await supabase
    .from('review-images')
    .select('id, review_id, image_url, storage_path, display_order, created_at')
    .eq('review_id', reviewId)
    .order('display_order', {ascending: true})
    .order('created_at', {ascending: true});

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as ReviewImageRecord[];
};

type UploadReviewImagesInput = {
  files: File[];
  reviewId: string;
  startOrder?: number;
};

export const uploadReviewImages = async ({
  files,
  reviewId,
  startOrder = 0,
}: UploadReviewImagesInput): Promise<void> => {
  if (files.length === 0) {
    return;
  }

  const uploadedImages = await Promise.all(
    files.map(async (file, index) => {
      const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
      const safeName = `${crypto.randomUUID()}.${extension}`;
      const storagePath = `public/${reviewId}/${safeName}`;

      const {error: uploadError} = await supabase.storage
        .from(REVIEW_IMAGES_BUCKET)
        .upload(storagePath, file, {
          cacheControl: '3600',
          contentType: file.type,
          upsert: false,
        });

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      const {data: publicUrlData} = supabase.storage
        .from(REVIEW_IMAGES_BUCKET)
        .getPublicUrl(storagePath);

      return {
        review_id: reviewId,
        image_url: publicUrlData.publicUrl,
        file_path: storagePath,
        storage_path: storagePath,
        display_order: startOrder + index,
      };
    }),
  );

  const {error} = await supabase.from('review-images').insert(uploadedImages);

  if (error) {
    throw new Error(error.message);
  }
};

type DeleteReviewImageInput = {
  imageId: string;
  storagePath: string;
};

export const deleteReviewImage = async ({
  imageId,
  storagePath,
}: DeleteReviewImageInput): Promise<void> => {
  const {error: storageError} = await supabase.storage
    .from(REVIEW_IMAGES_BUCKET)
    .remove([storagePath]);

  if (storageError) {
    throw new Error(storageError.message);
  }

  const {error} = await supabase
    .from('review-images')
    .delete()
    .eq('id', imageId);

  if (error) {
    throw new Error(error.message);
  }
};
