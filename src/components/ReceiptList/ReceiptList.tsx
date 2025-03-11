'use client'

import { RecipeList } from "@/interfaces/recipes";
import Image from "next/image";
import Link from "next/link";

interface ReceiptListProps {
    recipes: RecipeList;
}
 
export default function ReceiptList({recipes}: ReceiptListProps) {
  return (
    <div className="p-2">
            <button
          className={'p-2 text-white rounded bg-blue-500 hover:bg-blue-700'}
            >
           <Link href="/" >Back to Home</Link>
        </button>
            <h1 className="text-3xl font-bold mb-4">Recipes</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {recipes?.results?.length > 0 ? (
                    recipes?.results?.map((recipe) => (
                        <div key={recipe.id} className="border p-4 rounded-lg shadow-lg">
                           <Image className="w-full h-40 object-cover rounded-md" width={100} height={40} src={recipe.image} loader={({src}) => src} alt={recipe.title}/>
                            <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
                            <Link href={`/recipes/${recipe.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
                        </div>
                    ))
                ) : (
                    <h2>No recipes found. Try adjusting your search criteria.</h2>
                )}
            </div>
        </div>
  )
}