import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}


export default async function CartegoryPage({ params }: Props) {
  const { id } = await params;

  if (id === 'kids') {
    notFound();
  }
  
  
  return (
    <div>
      <h1>Category Page {id}</h1>
    </div>
  );
}