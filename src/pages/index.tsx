import useTranslation from 'next-translate/useTranslation';
import Layout from '@/components/Layout';
import GlossaryDataComp from '@/components/Glossary';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export type GlossaryData = {
  id: number;
  attributes: {
    en_term: string;
    mm_term: string;
    description: string;
    reference?: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    subterm?: string;
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://cms.businessintegritymyanmar.thibi.co/api/glossaries');
  const glossaryData: GlossaryData[] = await res.json();
  return {
    props: { glossaryData: glossaryData.data },
  };
};
export default function Home({ glossaryData }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation('common');

  return (
    <>
      <Layout>
        <div className="h-full ">
          <GlossaryDataComp glossaryData={glossaryData} />
        </div>
      </Layout>
    </>
  );
}
