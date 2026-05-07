import ServicePageSection from '../_components/service-page-section';

const FloorCoatingPage = () => {
  return (
    <div className="bg-linear-to-b from-page-top via-white to-page-base">
      <ServicePageSection
        eyebrow="FLOOR COATING"
        title="바닥 상태에 맞춰 코팅 전후를 관리합니다."
        description="바닥의 오염과 잔먼지를 정리한 뒤 공간 용도에 맞는 코팅 작업으로 더 단정하고 관리하기 쉬운 바닥 상태를 준비합니다."
        highlights={[
          '바닥 재질과 오염 상태를 먼저 확인해 작업 방향을 정합니다.',
          '코팅 전 이물질과 잔먼지를 정리해 마감 품질을 높입니다.',
          '상가, 사무실, 주거 공간 등 사용 목적에 맞춰 안내합니다.',
          '작업 후 관리 방법까지 간단히 안내해 유지 관리를 돕습니다.',
        ]}
        scopes={[
          '바닥 상태 점검과 작업 범위 확인',
          '코팅 전 먼지, 얼룩, 잔오염 정리',
          '공간 용도에 맞는 코팅 작업',
          '작업 후 건조와 관리 안내',
        ]}
      />
    </div>
  );
};

export default FloorCoatingPage;
