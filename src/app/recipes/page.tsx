// import { getReceipts } from "@/api/request";
import { getReceipts } from "@/api/request";
import ReceiptList from "@/components/ReceiptList/ReceiptList";
import { RecipesSearchParams } from "@/interfaces/recipes";
import { Suspense } from "react";

interface RecipesProps {
  searchParams: Promise<RecipesSearchParams>;
}

export default async function Recipes({ searchParams }: RecipesProps) {
  const recipes = await getReceipts(await searchParams);
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ReceiptList recipes={recipes} />
      </Suspense>
    </main>
  );
}
