import type { SanityComponent } from "./Hero";

export interface FeaturesNumbersProps extends SanityComponent {
  features: { number: number; headline: string }[];
}

export const FeaturesNumbers: React.FC<{
  data: FeaturesNumbersProps;
}> = ({ data }) => {
  return (
    <div className="flex items-center justify-center py-12">
      <ul className="grid h-full w-fit grid-cols-2 items-center justify-center gap-24 lg:grid-cols-4">
        {data.features.map((feature) => (
          <li key={feature.number} className="flex flex-col items-center gap-4">
            <span className="font-robotoCondensed text-6xl font-semibold text-white">
              {feature.number}
            </span>
            <span className="font-robotoCondensed text-base text-[#ADADAD]">
              {feature.headline}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
