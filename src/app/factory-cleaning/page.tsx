import ServicePageSection from '../_components/service-page-section';

const FactoryCleaningPage = () => {
  return (
    <div className="bg-linear-to-b from-page-top via-white to-page-base">
      <ServicePageSection
        eyebrow="FACTORY CLEANING"
        title="공장과 작업장의 청결 기준을 체계적으로 맞춥니다."
        description="넓은 작업장, 설비 주변, 통로와 공용 구역을 구분해 생산 현장에 필요한 청결과 안전한 동선을 함께 고려합니다."
        highlights={[
          '작업장 규모와 운영 시간을 고려해 청소 구역을 단계적으로 나눕니다.',
          '설비 주변 먼지와 바닥 오염처럼 현장 특성이 강한 구역을 확인합니다.',
          '작업자 이동 동선과 안전 구역을 고려해 청소 순서를 조율합니다.',
          '정기 관리가 필요한 공장은 반복 가능한 체크 기준을 세울 수 있습니다.',
        ]}
        scopes={[
          '작업장 바닥과 통로 먼지 제거',
          '설비 주변 접근 가능 구역 청소',
          '창고, 휴게실, 공용 구역 정리',
          '현장 상황에 맞춘 정기 청소 범위 협의',
        ]}
      />
    </div>
  );
};

export default FactoryCleaningPage;
