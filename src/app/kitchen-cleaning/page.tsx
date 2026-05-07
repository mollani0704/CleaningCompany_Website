import ServicePageSection from '../_components/service-page-section';

const KitchenCleaningPage = () => {
  return (
    <div className="bg-linear-to-b from-page-top via-white to-page-base">
      <ServicePageSection
        eyebrow="KITCHEN CLEANING"
        title="주방의 기름때와 위생 구역을 집중 관리합니다."
        description="조리 공간에 쌓이기 쉬운 기름때, 후드 주변 오염, 수납장과 싱크대 주변을 중심으로 위생적인 주방 상태를 만듭니다."
        highlights={[
          '후드, 벽면, 조리대처럼 오염이 누적되는 구역을 집중 확인합니다.',
          '식재료와 조리 도구가 닿는 공간을 고려해 위생 흐름을 우선합니다.',
          '가정집과 상업 주방 모두 공간 상황에 맞춰 작업 범위를 조율합니다.',
          '물때와 기름때를 구분해 구역별로 적절한 방식으로 청소합니다.',
        ]}
        scopes={[
          '후드, 가스레인지, 조리대 주변 오염 제거',
          '싱크대, 배수구, 수전 주변 물때 관리',
          '수납장 내외부 먼지와 얼룩 정리',
          '벽면, 바닥, 주방 동선 청소',
        ]}
      />
    </div>
  );
};

export default KitchenCleaningPage;
