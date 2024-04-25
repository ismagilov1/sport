import { Partner } from "./partners";

type PartnerCardProps = {
  partner: Partner;
};

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <img className="bg-gray-500 rounded-full w-[97px] h-[97px] md:w-[183px] md:h-[183px]" src={partner.img} alt={partner.name} />
      <h3 className="w-full text-3xl bebas font-bold">{partner.name}</h3>
      <p className="ml-6 font-light">{partner.description}</p>
    </div>
  );
}
