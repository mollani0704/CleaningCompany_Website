import {supabase} from '@/app/lib/supabase';
import {CaseReviewsManager} from '../_components/case-reviews-manager';
import {type ReviewRecord} from '../_components/case-review-form';

export const dynamic = 'force-dynamic';

export default async function AdminCasesPage() {
  const {data, error} = await supabase
    .from('reviews')
    .select('id, title, content, created_at')
    .order('created_at', {ascending: false});

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(37,99,235,0.08)] sm:p-10">
      <p className="text-sm font-semibold tracking-[0.18em] text-primary">
        CASES ADMIN
      </p>
      <h1 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-5xl">
        작업사례 관리
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
        reviews 테이블에 저장된 작업사례를 불러와 목록으로 확인하고, 선택한
        사례의 제목과 내용을 바로 수정할 수 있습니다.
      </p>

      <CaseReviewsManager
        initialError={error?.message ?? null}
        initialReviews={(data ?? []) as ReviewRecord[]}
      />
    </div>
  );
}
