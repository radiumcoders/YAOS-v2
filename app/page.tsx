import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="min-h-[calc(100dvh-4rem-1px)] w-full max-w-7xl mx-auto px-4">
      {/* HERO TEXT */}
      <div className="pt-8 sm:pt-12 md:pt-16 pb-4 sm:pb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-geist-pixel-square">
        <h1>
          The <span className="text-emerald-500">Open Source Collection</span>{" "}
          You've Been Looking For :D
        </h1>
      </div>
      
      {/* Hero Description */}
      <p className="pb-6 sm:pb-8 font-geist-pixel-grid text-sm sm:text-base">
        A handpicked collection of open-source UI libraries, portfolio
        templates, tools, and resources to accelerate your next project. All
        free. All open.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pb-8 sm:pb-10">
        <Link href="/libs">
          <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-md font-geist-pixel-square">
            Explore Collection
          </Button>
        </Link>
        <Link href="/submit">
          <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-md font-geist-pixel-square font-medium">
            Add to List
          </Button>
        </Link>
      </div>
    </main>
  );
}
