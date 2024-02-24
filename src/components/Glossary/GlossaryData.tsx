import React, { useEffect, useState } from 'react';
import GlossaryCard from './GlossaryCard';

import { useRouter } from 'next/router';
import { GlossaryData } from '@/shared/types';

const letterArr: string[] = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

type GlossaryDataProps = {
  glossaryDataEng: GlossaryData[];
  glossaryDataMM: GlossaryData[];
};

// filtering glossary data according to selected letter
const filterFunc = (data: GlossaryData[], letter: string): GlossaryData[] => {
  return data?.filter((d: GlossaryData) => d.attributes.en_term.startsWith(letter));
};

const GlossaryData = ({ glossaryDataEng, glossaryDataMM }: GlossaryDataProps) => {
  const { locale } = useRouter();

  const [selectedLetter, setSelectedLetter] = useState('A');
  const [filteredData, setFilteredData] = useState(
    filterFunc(locale === 'mm' ? glossaryDataMM : glossaryDataEng, 'A')
  );

  const filterLetter = (letter: string): void => {
    setSelectedLetter(letter);
    const filteredData = filterFunc(locale === 'mm' ? glossaryDataMM : glossaryDataEng, letter);
    setFilteredData(filteredData);
  };

  useEffect(() => {
    setFilteredData(filterFunc(locale === 'mm' ? glossaryDataMM : glossaryDataEng, selectedLetter));
  }, [locale]);

  return (
    <div className="bg-slate-200  px-4 mx-auto py-5">
      <div>
        <p className="font-bold text-xl text-center">ဝေါဟာရ</p>
        <p className="text-center text-sm leading-6 mt-6">
          သတင်းအချက်အလက်တွေကို နည်းပညာအသုံးပြုပြီး သိမ်းဆည်းခြင်း၊ ရယူခြင်း၊ အသုံးချခြင်းလို့
          အဓိပ္ပာယ် ဖွင့်ဆိုနိုင်ပါတယ်။
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-5">
        <span>&#35;</span>
        {letterArr.map((letter: string) => (
          <span
            key={letter}
            onClick={() => filterLetter(letter)}
            className={`cursor-pointer hover:text-primary ${
              selectedLetter === letter && 'text-primary underline font-bold'
            }`}
          >
            {letter}
          </span>
        ))}
      </div>

      <GlossaryCard selectedLetter={selectedLetter} glossaryData={filteredData} />
      <p className="mt-5 text-sm text-center underline text-[#727272]">စာမျက်နှာအပေါ်သို့</p>
    </div>
  );
};

export default GlossaryData;
