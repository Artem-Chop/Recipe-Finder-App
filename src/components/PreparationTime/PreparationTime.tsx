"use client";

import { useSearchParams } from "next/navigation";

export default function PreparationTime({
  placeholder,
}: {
  placeholder: string;
}) {
  const searchParams = useSearchParams();

  return (
    <input
      type="number"
      name="mins"
      className="w-full p-2 border border-gray-300 rounded mb-4"
      placeholder={placeholder}
      defaultValue={searchParams.get("mins")?.toString()}
    />
  );
}
