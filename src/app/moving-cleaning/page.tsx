import ServicePageSection from '../_components/service-page-section';

const MovingCleaningPage = () => {
  return (
    <div className="bg-linear-to-b from-page-top via-white to-page-base">
      <ServicePageSection
        eyebrow="MOVING CLEANING"
        title="이사 전후 공간을 깔끔하게 정리합니다."
        description="입주와 퇴거 시기에 맞춰 먼지, 찌든 때, 생활 오염을 정리해 새 출발에 어울리는 공간 상태를 만듭니다."
        highlights={[
          '입주 전 전체 점검으로 청소 범위와 우선순위를 빠르게 정리합니다.',
          '창틀, 몰딩, 수납장처럼 놓치기 쉬운 구역까지 꼼꼼히 확인합니다.',
          '주거 공간의 동선과 일정에 맞춰 작업 시간을 효율적으로 조율합니다.',
          '마무리 확인을 통해 바로 생활할 수 있는 상태를 목표로 합니다.',
        ]}
        scopes={[
          '현관, 거실, 방 바닥과 벽면 먼지 제거',
          '주방 수납장, 싱크대, 후드 주변 오염 정리',
          '욕실 물때와 배수구 주변 청소',
          '창틀, 베란다, 몰딩 등 세부 구역 점검',
        ]}
      />
    </div>
  );
};

export default MovingCleaningPage;
