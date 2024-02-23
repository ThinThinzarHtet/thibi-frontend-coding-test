import useTranslation from 'next-translate/useTranslation';
import Layout from '@/components/Layout';
import GlossaryData from '@/components/Glossary/GlossaryData';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Layout>
        <div className="h-full bg-blue-300">
          <GlossaryData />
        </div>
      </Layout>
    </>
  );
}
