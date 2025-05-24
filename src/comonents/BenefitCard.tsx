import Image from 'next/image';

interface BenefitCardProps {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function BenefitCard({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: BenefitCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-6 flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } items-start justify-between gap-4 shadow`}
    >
      <div className="flex-1 space-y-5 md:p-14 lg:p-20">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-bold">{title}</h3>
        <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed">
          {description}
        </p>
      </div>
      <div className="md:w-[250px] lg:w-[300px] shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={200}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
