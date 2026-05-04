import {supabase} from './supabase';

export const mainImagesQueryKey = ['main-images'] as const;

export const MAIN_IMAGES_BUCKET = 'main-images';
export const MAX_MAIN_IMAGES = 7;
export const MAX_MAIN_IMAGES_TOTAL_SIZE = 50 * 1024 * 1024;

export type MainImageRecord = {
  id: string;
  file_path: string;
  image_url: string;
  file_name: string | null;
  file_size_bytes: number | null;
  display_order: number | null;
  created_at: string;
  update_at: string | null;
  mime_type: string | null;
  storage_path: string | null;
};

export const fetchMainImages = async (): Promise<MainImageRecord[]> => {
  const {data, error} = await supabase
    .from('main-images')
    .select(
      'id, file_path, image_url, file_name, file_size_bytes, display_order, created_at, update_at, mime_type, storage_path',
    )
    .order('display_order', {ascending: true})
    .order('created_at', {ascending: true});

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as MainImageRecord[];
};

type UploadMainImagesInput = {
  existingImages: MainImageRecord[];
  files: File[];
};

export const uploadMainImages = async ({
  existingImages,
  files,
}: UploadMainImagesInput): Promise<void> => {
  if (files.length === 0) {
    return;
  }

  if (existingImages.length + files.length > MAX_MAIN_IMAGES) {
    throw new Error('메인 히어로 이미지는 최대 7장까지 업로드할 수 있습니다.');
  }

  const existingTotalSize = existingImages.reduce(
    (total, image) => total + (image.file_size_bytes ?? 0),
    0,
  );
  const incomingTotalSize = files.reduce((total, file) => total + file.size, 0);

  if (existingTotalSize + incomingTotalSize > MAX_MAIN_IMAGES_TOTAL_SIZE) {
    throw new Error('메인 히어로 이미지 전체 용량은 50MB를 넘을 수 없습니다.');
  }

  const uploadedStoragePaths: string[] = [];

  try {
    const uploadedImages = [];

    for (const [index, file] of files.entries()) {
      const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
      const safeName = `${crypto.randomUUID()}.${extension}`;
      const storagePath = `public/${safeName}`;

      const {error: uploadError} = await supabase.storage
        .from(MAIN_IMAGES_BUCKET)
        .upload(storagePath, file, {
          cacheControl: '3600',
          contentType: file.type,
          upsert: false,
        });

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      uploadedStoragePaths.push(storagePath);

      const {data: publicUrlData} = supabase.storage
        .from(MAIN_IMAGES_BUCKET)
        .getPublicUrl(storagePath);
      const now = new Date().toISOString();

      uploadedImages.push({
        file_path: storagePath,
        image_url: publicUrlData.publicUrl,
        file_name: file.name,
        file_size_bytes: file.size,
        display_order: existingImages.length + index,
        created_at: now,
        update_at: now,
        mime_type: file.type,
        storage_path: storagePath,
      });
    }

    const {error} = await supabase.from('main-images').insert(uploadedImages);

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    if (uploadedStoragePaths.length > 0) {
      await supabase.storage
        .from(MAIN_IMAGES_BUCKET)
        .remove(uploadedStoragePaths);
    }

    throw error;
  }
};

type DeleteMainImageInput = {
  imageId: string;
  storagePath: string;
};

export const deleteMainImage = async ({
  imageId,
  storagePath,
}: DeleteMainImageInput): Promise<void> => {
  const {error: storageError} = await supabase.storage
    .from(MAIN_IMAGES_BUCKET)
    .remove([storagePath]);

  if (storageError) {
    throw new Error(storageError.message);
  }

  const {error} = await supabase.from('main-images').delete().eq('id', imageId);

  if (error) {
    throw new Error(error.message);
  }
};
