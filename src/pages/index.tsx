import Layout from '@/components/Layout';
import GlossaryDataComp from '@/components/Glossary';

import { GlossaryData } from '@/shared/types';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const resEN = await fetch('https://cms.businessintegritymyanmar.thibi.co/api/glossaries');
  const glossaryDataEng: GlossaryData[] = await resEN.json();

  const resMM = await fetch('https://cms.businessintegritymyanmar.thibi.co/api/glossarymms');
  const glossaryDataMM: GlossaryData[] = await resMM.json();

  return {
    props: { glossaryDataEng: glossaryDataEng, glossaryDataMM: glossaryDataMM },
  };
};

export default function Home({
  glossaryDataEng,
  glossaryDataMM,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout>
        <div className="h-full ">
          <GlossaryDataComp
            glossaryDataEng={glossaryDataEng.data}
            glossaryDataMM={glossaryDataMM.data}
          />
        </div>
      </Layout>
    </>
  );
}
