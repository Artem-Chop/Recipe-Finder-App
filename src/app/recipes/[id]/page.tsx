import { getRecipe } from "@/api/request";
import Image from "next/image";
import Link from "next/link";

interface ReceiptDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function ReceiptDetails({ params }: ReceiptDetailsProps) {
  const { id } = await params;
  const recipe = await getRecipe(id);

  return (
    <div className="p-2">
      <button
        className={"p-2 text-white rounded bg-blue-500 hover:bg-blue-700"}
      >
        <Link href="/">Back to Home</Link>
      </button>
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <div className="relative w-full h-50 sm:h-70 md:h-90 rounded-md overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill={true}
          className="object-cover"
          priority={true}
        />
      </div>
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-5">
        {recipe.extendedIngredients?.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
    </div>
  );
}
