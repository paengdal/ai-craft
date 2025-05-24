// src/components/BenefitSection.tsx

import BenefitCard from './BenefitCard';

export default function BenefitSection() {
  return (
    <section className="bg-gray-50 px-6 py-16 space-y-10">
      <BenefitCard
        title="“저렴한 가격에 빠른 속도로 제작까지?”"
        description={
          <>
            생성형 <strong>AI 기술</strong>과 다년간 쌓아온{' '}
            <strong>영상 제작 노하우</strong>를 통해 가능합니다.
            <br />
            기획과 촬영, 편집 등 <strong>모든 과정에 전문가</strong>가 함께
            합니다.
          </>
        }
        imageSrc="/images/card01.png"
        imageAlt="영상 제작 이미지"
      />

      <BenefitCard
        title="“뭘 준비할지 모르겠는데.. 어떻게 하죠?”"
        description={
          <>
            걱정하지 마세요. 사진, 영상, 하고 싶은 이야기만 준비하시고
            <br />
            <strong>전문 작가</strong>가 고객님께 연락을 드리면{' '}
            <strong>인터뷰</strong>만으로 끝!!
          </>
        }
        imageSrc="/images/card02.png"
        imageAlt="준비 걱정 없는 서비스"
        reverse
      />

      <BenefitCard
        title="“정말.. 믿어도 될까요?”"
        description={
          <>
            실제 소규모 온라인샵 운영 시의 경험을 바탕으로 이 서비스를 만들게
            됐습니다.
            <br />
            믿고 맡겨주시면 <strong>품질로 보답</strong>하겠습니다.
          </>
        }
        imageSrc="/images/card03.png"
        imageAlt="신뢰 기반 서비스"
      />
    </section>
  );
}
