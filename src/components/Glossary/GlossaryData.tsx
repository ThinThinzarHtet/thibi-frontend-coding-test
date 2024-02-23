import React from 'react';
import GlossaryCard from './GlossaryCard';

type Props = {};

const GlossaryData = (props: Props) => {
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
          <span key={letter}>{letter}</span>
        ))}
      </div>
      <GlossaryCard />
    </div>
  );
};

export default GlossaryData;
