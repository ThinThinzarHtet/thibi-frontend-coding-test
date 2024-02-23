import { GlossaryData } from '@/pages';

type GlossaryCardProps = {
  selectedLetter: string;
  glossaryData: GlossaryData[];
};

const GlossaryCard = ({ selectedLetter, glossaryData }: GlossaryCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-t-[5px] mt-5">
      <div className="bg-blue-600 pl-8 py-5">
        <span className="font-bold text-white">{selectedLetter ? selectedLetter : 'A'}</span>
      </div>

      <div className="py-10">
        {glossaryData.map((data: GlossaryData) => (
          <div key={data.id} className="px-8 mb-5">
            <p className="underline mb-3 font-bold">{data?.attributes?.en_term}</p>
            <p className="leading-6">{data?.attributes?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlossaryCard;
