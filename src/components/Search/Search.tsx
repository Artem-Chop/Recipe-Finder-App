'use client';

export default function Search({ placeholder }: { placeholder: string }) {
    return (
            <input
                className="w-full p-2 border border-gray-300 rounded mb-4"
                name="query"
                placeholder={placeholder}
            />
    );
}