import ServicePageSection from '../_components/service-page-section';

const StoreCleaningPage = () => {
  return (
    <div className="bg-linear-to-b from-page-top via-white to-page-base">
      <ServicePageSection
        eyebrow="STORE CLEANING"
        title="상가와 매장의 첫인상을 단정하게 관리합니다."
        description="방문 고객이 가장 먼저 보는 바닥, 유리, 진열 공간을 중심으로 매장 운영에 어울리는 청결한 환경을 준비합니다."
        highlights={[
          '영업 전후 일정에 맞춰 매장 운영 방해를 줄이는 방향으로 작업합니다.',
          '고객 동선과 직원 동선을 나눠 오염이 많은 구역을 우선 관리합니다.',
          '유리, 출입구, 카운터 주변처럼 첫인상에 영향을 주는 곳을 정돈합니다.',
          '정기 관리가 필요한 매장은 반복 작업 기준을 함께 정리할 수 있습니다.',
        ]}
        scopes={[
          '매장 바닥 먼지와 오염 제거',
          '출입문, 유리, 손잡이 주변 청소',
          '카운터, 진열대, 공용 공간 정리',
          '화장실과 직원 공간 위생 관리',
        ]}
      />
    </div>
  );
};

export default StoreCleaningPage;
