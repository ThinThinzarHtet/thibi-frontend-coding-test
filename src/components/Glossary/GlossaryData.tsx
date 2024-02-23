import React, { useState } from 'react';
import GlossaryCard from './GlossaryCard';
import { GlossaryData } from '@/pages';

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
  glossaryData: GlossaryData[];
};

const filterFunc = (data: GlossaryData[], letter: string): GlossaryData[] => {
  return data.filter((d: GlossaryData) => d.attributes.en_term.startsWith(letter));
};
const GlossaryData = ({ glossaryData }: GlossaryDataProps) => {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [filteredData, setFilteredData] = useState(filterFunc(glossaryData, 'A'));

  const filterLetter = (letter: string): void => {
    setSelectedLetter(letter);
    // const filteredData = glossaryData.filter((data: GlossaryData) =>
    //   data.attributes.en_term.startsWith(letter)
    // );
    const filteredData = filterFunc(glossaryData, letter);
    setFilteredData(filteredData);
  };

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
        {letterArr.map((letter) => (
          <span
            key={letter}
            onClick={() => filterLetter(letter)}
            className={`cursor-pointer hover:text-blue-500 ${
              selectedLetter === letter && 'text-blue-500 underline font-bold'
            }`}
          >
            {letter}
          </span>
        ))}
      </div>

      <GlossaryCard selectedLetter={selectedLetter} glossaryData={filteredData} />
    </div>
  );
};

export default GlossaryData;
