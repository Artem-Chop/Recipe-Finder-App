import { getRecipe } from "@/api/request";
import Link from "next/link";

interface ReceiptDetailsProps {
    params: { id: string }
}

export default async function ReceiptDetails({
    params,
}: ReceiptDetailsProps) {
    const { id } = params
    const recipe = await getRecipe(id);

    return (
        <div className="p-2">
            <button
                className={'p-2 text-white rounded bg-blue-500 hover:bg-blue-700'}
            >
                <Link href="/" >Back to Home</Link>
            </button>
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc pl-5">
                {recipe.extendedIngredients?.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
        </div>
    )
}