import BenefitsSection from '@/comonents/BenefitSection';
import FooterSection from '@/comonents/FooterSection';
import HeaderSection from '@/comonents/HeaderSection';
import PortfolioSection from '@/comonents/PortfolioSection';

export default function HomePage() {
  return (
    <div className="flex justify-center">
      <div className="min-h-screen w-[1200px]">
        <HeaderSection />
        <PortfolioSection />
        <BenefitsSection />
        <FooterSection />
      </div>
    </div>
  );
}
