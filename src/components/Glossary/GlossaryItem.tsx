import React from 'react';

import useTranslation from 'next-translate/useTranslation';
import { GlossaryData } from '@/shared/types';

type GlossaryItemProps = {
  glossaryData: GlossaryData[];
};

const GlossaryItem = ({ glossaryData }: GlossaryItemProps) => {
  const { t } = useTranslation('common');
  return (
    <div className="py-10 min-h-[200px]">
      {glossaryData.length === 0 ? (
        <>
          <div className="flex justify-center px-8">
            <p>There is no data!</p>
          </div>
        </>
      ) : (
        glossaryData?.map((data: GlossaryData) => {
          return (
            <div key={data.id} className="px-8 mb-5">
              <p className="underline mb-3 font-bold">{data?.attributes?.en_term}</p>
              <p className="leading-6">
                {t('description', { description: data?.attributes?.description })}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default GlossaryItem;
