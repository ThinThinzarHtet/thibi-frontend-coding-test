export type GlossaryData = {
  id: number;
  attributes: {
    en_term: string;
    mm_term: string;
    description: string;
    reference: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    subterm: string;
  };
};
