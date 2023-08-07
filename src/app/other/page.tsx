"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="text-2xl">other page</div>
      <button
        onClick={() => {
          router.back();
        }}
      >
        navigate back
      </button>
    </div>
  );
}
