import { TSidebarCardProps } from "@/types";

const SidebarCard = ({ text, number, logo }: TSidebarCardProps) => {
  return (
    <div className="bg-[#ECEDEE]  flex flex-col justify-center items-start py-6 rounded-xl">
      {logo}
      <p className="mb-3 ms-4 text-[#8e8f8f] text-xl font-semibold">{text}</p>
      <h3 className="text-xl font-bold ms-4">{number}</h3>
    </div>
  );
};

export default SidebarCard;
