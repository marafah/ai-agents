import { learningPaths } from '@/data/paths';
import PathDetailClient from './PathDetailClient';

export function generateStaticParams() {
  return learningPaths.map((p) => ({ slug: p.slug }));
}

export default async function PathDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = (await params);
  return <PathDetailClient slug={slug} />;
}
