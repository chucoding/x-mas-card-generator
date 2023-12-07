"use client";

export default function CountBadge({ count, totalCount }: any) {
  return (
    <div key={count} className="animate-fadein mt-4">
      {count} / {totalCount}
    </div>
  );
}
