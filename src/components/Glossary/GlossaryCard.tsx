import { GlossaryData } from '@/pages';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

type GlossaryCardProps = {
  selectedLetter: string;
  glossaryData: GlossaryData[];
};

const GlossaryCard = ({ selectedLetter, glossaryData }: GlossaryCardProps) => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();

  return (
    <div className="bg-white shadow-md rounded-t-[5px] mt-5">
      <div className="bg-blue-600 pl-8 py-5">
        <span className="font-bold text-white">{selectedLetter ? selectedLetter : 'A'}</span>
      </div>

      <div className="py-10">
        {glossaryData?.map((data: GlossaryData) => {
          return (
            <div key={data.id} className="px-8 mb-5">
              <p className="underline mb-3 font-bold">{data?.attributes?.en_term}</p>

              <p className="leading-6">
                {locale === 'mm'
                  ? t('description', { description: data?.attributes?.mm_term })
                  : t('description', { description: data?.attributes?.description })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlossaryCard;
