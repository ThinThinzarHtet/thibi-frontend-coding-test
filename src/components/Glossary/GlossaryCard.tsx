import { GlossaryData } from '@/shared/types';
import GlossaryItem from './GlossaryItem';

type GlossaryCardProps = {
  selectedLetter: string;
  glossaryData: GlossaryData[];
};

const GlossaryCard = ({ selectedLetter, glossaryData }: GlossaryCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-t-[5px] mt-5">
      <div className="bg-primary pl-8 py-5">
        <span className="font-bold text-white">{selectedLetter ? selectedLetter : 'A'}</span>
      </div>
      <GlossaryItem glossaryData={glossaryData} />
    </div>
  );
};

export default GlossaryCard;
