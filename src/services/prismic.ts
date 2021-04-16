import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

const PRISMIC_URL = 'https://lucasamonrc.cdn.prismic.io/api/v2';

export function getPrismicClient(request?: unknown): DefaultClient {
  const prismic = Prismic.client(PRISMIC_URL, { req: request });

  return prismic;
}
