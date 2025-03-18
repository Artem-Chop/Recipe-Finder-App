"use client";

import { useState } from "react";

const receiptsRegions = [
  "French",
  "Greek",
  "German",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
];

export default function ReceiptTypeSelector() {
  const [region, setRegion] = useState<string | null>(null);

  return (
    <select
      name="cuisine"
      className="w-full p-2 border border-gray-300 rounded mb-4"
      value={region?.toString()}
      onChange={(e) => setRegion(e.target.value)}
    >
      <option value="">Select Cuisine</option>
      {receiptsRegions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}
